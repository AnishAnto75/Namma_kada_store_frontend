import { createEntityAdapter , createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";



const ADMIN_ORDER_URL = import.meta.env.VITE_ADMIN_ORDERS_URL

const adminOrderAdapter = createEntityAdapter({
    selectId: (order) => order._id,
    sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt)
})

const initialState = adminOrderAdapter.getInitialState({
    status : 'idle',
    error : null 
})

export const getAdminOrder = createAsyncThunk('adminOrder/getAdminOrder' , async()=>{
    const res = await axios.get(`${ADMIN_ORDER_URL}`).catch((error)=>{
        throw new Error(error.response.data.error)
    })
    return res.data
})

export const updateAdminOrderStatus = createAsyncThunk('adminOrder/updateAdminOrderStatus' , async(data)=>{

    const {order_status , id} = data

    const status = {order_status , date : new Date} 

    const res = await axios.put(`${ADMIN_ORDER_URL}/${id}` , status).catch((error)=>{
        throw new Error(error.response.data.error)
    })
    return res.data
})

const adminOrderSlice = createSlice({
    name : 'order',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder

        .addCase(getAdminOrder.pending , (state , action)=>{
            state.status = 'loading'
        }) 
        .addCase(getAdminOrder.rejected , (state , action)=>{
            state.status = 'failed'
            state.error = action.error
            toast.error(action.error.message)
            console.error('getAdminOrdersError',action.error)
        })
        .addCase(getAdminOrder.fulfilled , (state , action)=>{
            state.status = 'succeded'
            console.log('getAdminOrders payload :',action.payload)
            adminOrderAdapter.setMany(state , action.payload.data)             
        })
        
        .addCase(updateAdminOrderStatus.pending , (state , action)=>{
            state.status = 'loading'
        }) 
        .addCase(updateAdminOrderStatus.rejected , (state , action)=>{
            state.status = 'failed'
            state.error = action.error
            toast.error(action.error)
            console.error('updateAdminOrdersError',action)
        })
        .addCase(updateAdminOrderStatus.fulfilled , (state , action)=>{
            state.status = 'succeded'
            console.log('updateAdminOrders payload :',action.payload.data)
            adminOrderAdapter.upsertOne(state , action.payload.data)             
        })
    }
})

export const {
    selectById : selectAdminOrderById,
    selectIds : selectAdminOrderIds,
    selectTotal : seleteTotalNumberOfAdminOrders,
    selectAll : selectAllAdminOrders
} = adminOrderAdapter.getSelectors((state) => state.adminOrders)

export const selectAdminOrderStatus = (state) => state.adminOrders.status

export default adminOrderSlice.reducer