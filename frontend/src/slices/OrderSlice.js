import { createEntityAdapter , createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const ORDER_URL = import.meta.env.VITE_ORDERS_URL

const orderAdapter = createEntityAdapter({
    selectId: (order) => order._id,
})

const initialState = orderAdapter.getInitialState({
    status : 'idle',
    error : null
})

export const createOrder = createAsyncThunk('order/createOrder' , async(data)=>{
    const res = await axios.post(ORDER_URL , data).catch((error)=>{
        throw new Error(error.response.data.error)
    })
    return res.data
})

const orderSlice = createSlice({
    name : 'order',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createOrder.pending , (state , action)=>{
            state.status = 'loading'
        }) 
        .addCase(createOrder.rejected , (state , action)=>{
            state.status = 'failed'
            state.error = action.error
            toast.error(action.error.message)
            console.error('createOrderError',action.error)
        })
        .addCase(createOrder.fulfilled , (state , action)=>{
            state.status = 'suceeded'
            console.log('createOrder payload :',action.payload)
            toast.success(action.payload.message)
            orderAdapter.addOne(state , action.payload.data)             
        })
    }
})

export default orderSlice.reducer