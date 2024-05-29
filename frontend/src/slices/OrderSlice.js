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
export const cancelOrderStatus = createAsyncThunk('order/cancelOrderStatus' , async(data)=>{

    const {id} = data
    const date = {date : new Date}
    console.log(id , status)
    const res = await axios.put(`${ORDER_URL}/${id}` , date).catch((error)=>{
        throw new Error(error.response.data.error)
    })
    return res.data
})

const orderSlice = createSlice({
    name : 'order',
    initialState,
    reducers:{
        addOrders : (state , action)=>{
            orderAdapter.upsertMany(state , action.payload)
        },
        changeState : (state , action)=>{
            state.status = action.payload
        }
    },
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
            state.status = 'succeded'
            console.log('createOrder payload :',action.payload)
            toast.success(action.payload.message)
            orderAdapter.addOne(state , action.payload.data)             
        })

        .addCase(cancelOrderStatus.pending , (state , action)=>{
            state.status = 'loading'
        }) 
        .addCase(cancelOrderStatus.rejected , (state , action)=>{
            state.status = 'failed'
            state.error = action.error
            toast.error(action.error)
            console.error('cancelOrdersError',action)
        })
        .addCase(cancelOrderStatus.fulfilled , (state , action)=>{
            state.status = 'succeded'
            console.log('canselOrders payload :',action.payload.data)
            orderAdapter.upsertOne(state , action.payload.data)             
        })
    }
})

export const {changeState , addOrders} = orderSlice.actions

export const {
    selectById : selectOrderById,
    selectIds : selectOrderIds,
    selectTotal : seleteTotalNumberOfProducts,
    selectAll : selectAllOrders
} = orderAdapter.getSelectors((state) => state.order)

export const selectOrderStatus = (state) => state.order.status

export default orderSlice.reducer