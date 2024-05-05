import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const PRODUCT_URL = import.meta.env.VITE_PRODUCT_URL

const productAdapter = createEntityAdapter({
    selectId : (product)=> product._id
})

export const fetchProducts = createAsyncThunk('products/fetchProducts' , async()=>{
    const res = await axios.get(PRODUCT_URL).catch((error)=>{
        throw new Error(error.response.data.message)
    })
    return res.data
}) 

export const addNewProduct = createAsyncThunk('products/addNewProduct' , async(data)=>{

    const res = await axios.post(PRODUCT_URL , data , {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).catch((error)=> {
        throw new Error(error.response.data.message)
    })
    return res.data
}) 

export const updateProduct = createAsyncThunk('products/updateProduct' , async({id ,data})=>{

    const res = await axios.put(`${PRODUCT_URL}/${id}` , data , {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).catch((error)=> {
        throw new Error(error.response.data.message)
    })
    return res.data
}) 

const initialState = productAdapter.getInitialState({
    status : "idle",
    error : null
})

const productSlice = createSlice({
    name:'product',
    initialState,
    reducer : {},
    extraReducers(builder){
        builder
        .addCase(fetchProducts.pending , (state , action)=>{
            state.status = 'loading'
        })
        .addCase(fetchProducts.rejected , (state , action)=>{
            state.status = 'failed'
            state.error = action.error.message
            toast.error(action.error.message)
            console.log(action.error)
        })
        .addCase(fetchProducts.fulfilled , (state , action)=>{
            state.status = 'suceeded'
            console.log('fetchProducts :',action.payload)
            productAdapter.upsertMany(state , action.payload.data)
        })

        .addCase(addNewProduct.pending , (state , action)=>{
            state.status = 'loading'
        })
        .addCase(addNewProduct.rejected , (state , action)=>{
            state.status = 'failed'
            state.error = action.error.message
            toast.error(action.error.message)
            console.log('product created rejected',action.error)
        })
        .addCase(addNewProduct.fulfilled , (state , action)=>{
            state.status = 'suceeded'
            console.log('addedNewProduct',action.payload)
            toast.success(action.payload.message)
            productAdapter.addOne(state , action.payload.data)
        })

        .addCase(updateProduct.pending , (state , action)=>{
            state.status = 'loading'
        })
        .addCase(updateProduct.rejected , (state , action)=>{
            state.status = 'failed'
            state.error = action.error.message
            toast.error(action.error.message)
            console.log('product update rejected',action.error)
        })
        .addCase(updateProduct.fulfilled , (state , action)=>{
            state.status = 'suceeded'
            console.log('updatedProduct',action.payload)
            toast.success(action.payload.message)
            productAdapter.upsertOne(state , action.payload.data)
        })
    }
})

export const {
    selectById : selectProductById,
    selectIds : selectProductIds,
    selectTotal : seleteTotalNumberOfProducts,
    selectAll : selectAllProduct
} = productAdapter.getSelectors((state) => state.product)

export const getProductStatus = (state)=> state.product.status
export default productSlice.reducer