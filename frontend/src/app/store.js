import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/UserSlice.js'
import ProductReducer from '../slices/ProductSlice.js'
import CartReducer from '../slices/CartSlice.js'
import OrderReducer from '../slices/OrderSlice.js'

export const store = configureStore({
    reducer : {
        user : userReducer,
        product : ProductReducer,
        cart : CartReducer,
        order : OrderReducer
    }
}) 