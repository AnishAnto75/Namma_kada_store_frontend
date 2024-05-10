import { useAuth0 } from '@auth0/auth0-react'
import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast'


const USER_URL = import.meta.env.VITE_USER_URL
const CART_URL = `${import.meta.env.VITE_BACKEND_URL}api/cart`

const userAdapter = createEntityAdapter({
    selectId: (user) => user._id,
})

const initialState = userAdapter.getInitialState({
    status : "idle",
    error : null
})

export const fetchUser = createAsyncThunk('user/fetchUser' , async(auth0Id)=>{
    const res = await axios.get(`${USER_URL}/${auth0Id}`).catch((error)=>{
        throw new Error(error.response.data.message)
    })
    return res.data
})

export const addNewUser = createAsyncThunk('user/addNewUser' , async(userData)=>{

    const res = await axios.post(USER_URL , userData).catch((error)=>{
        throw new Error(error.response.data.message)
    })
    return res.data.message
})

export const updateUser = createAsyncThunk('user/updateUser' , async(userData)=>{
    const id = userData.auth0Id 
    const res = await axios.put(`${USER_URL}/${id}` , userData).catch((error)=>{
        throw new Error(error.response.data.message)
    })
    return res.data
})

export const addToCart = createAsyncThunk('user/addToCart' , async(cartData)=>{
    const id = cartData.user_id
    const data = {product_id : cartData.product_id , no_of_product : cartData.no_of_product }

    const res = await axios.post(`${CART_URL}/${id}` , data).catch((error)=>{
        console.error(error)
        throw new Error(error.response.data.error)
    })
    return res.data
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducer:{},
    extraReducers(builder){
        builder
        //fetchUser
        .addCase(fetchUser.pending , (state , action)=>{
            state.status = 'loading'
        }) 
        .addCase(fetchUser.rejected , (state , action)=>{
            state.status = 'failed'
            console.log(action.error)
            toast.error(action.error.message)
            state.error = action.error.message
        })
        .addCase(fetchUser.fulfilled , (state , action)=>{
            state.status = 'suceeded'
            console.log('fetchUser payload :',action.payload)
            userAdapter.setOne(state , action.payload.data)             
        })

        // newUser
        .addCase(addNewUser.pending , (state , action)=>{
            state.status = 'loading'
        }) 
        .addCase(addNewUser.rejected , (state , action)=>{
            state.status = 'failed'
            console.log(action.error)
            toast.error(action.error.message)
            state.error = action.error.message
        })
        .addCase(addNewUser.fulfilled , (state , action)=>{
            state.status = 'suceeded'
            console.log('newUser : ',action.payload)
            toast.success(action.payload)
        })

        // updateUser
        .addCase(updateUser.pending , (state , action)=>{
            state.status = 'loading'
        }) 
        .addCase(updateUser.rejected , (state , action)=>{
            state.status = 'failed'
            toast.error(action.error.message)
            console.log(action.error)
            state.error = action.error.message
        })
        .addCase(updateUser.fulfilled , (state , action)=>{
            state.status = 'suceeded'
            console.log('updateUser payload :',action.payload.data)
            toast.success(action.payload.message)
            userAdapter.setOne(state , action.payload.data)
        })
        
        // add_to_cart
        .addCase(addToCart.rejected , (state , action)=>{
            state.status = 'failed'
            toast.error(action.error.message)
            console.log(action.error)
            state.error = action.error.error
        })
        .addCase(addToCart.fulfilled , (state , action)=>{
            state.status = 'suceeded'
            console.log('cart payload :',action.payload.data.orderDetails.items_in_cart)
            toast.success(action.payload.message)
            userAdapter.setOne(state , action.payload.data)
        })
    }
})

export const {
    selectById : selectUserById,
    selectIds : selectUserIds,
    selectTotal : selectTotalUser,
    selectAll : selectUser
} = userAdapter.getSelectors((state) => state.user)

export const getCartProductById = (state , id )=>{
    const user = state.user.entities
    
    const t = Object.entries(user).map((data)=> data )
    const datas = t[0]?.[1]?.orderDetails?.items_in_cart

    const datad = datas?.find(product => product.product_id == id)
    return datad
}
export const getUserStatus = (state)=> state.user.status
export default userSlice.reducer