import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/UserSlice.js'
import ProductReducer from '../slices/ProductSlice.js'
import CartReducer from '../slices/CartSlice.js'
import OrderReducer from '../slices/OrderSlice.js'
import AdminOrderReducer from '../slices/AdminOrdersSlice.js'
import GroupCategoryReducer from '../slices/GroupCategorySlice.js'

export const store = configureStore({
    reducer : {
        user : userReducer,
        product : ProductReducer,
        cart : CartReducer,
        order : OrderReducer,
        adminOrders : AdminOrderReducer,
        groupCategory : GroupCategoryReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
}) 