import { useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import AuthCallBack from './pages/AuthCallBack'

import { fetchUser, selectUser} from './slices/UserSlice'
import { fetchProducts, getProductStatus } from './slices/ProductSlice'
import { addCartProduct } from './slices/CartSlice.js'

import AdminLayout from './layouts/Admin_layout'
import AdminProductPage from './pages/adminpages/products/AdminProductPage'
import AddNewProductPage from './pages/adminpages/products/AddNewProductPage'
import AdminProductViewPage from './pages/adminpages/products/AdminProductViewPage'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import UserProfilePage from './pages/UserProfilePage'
import AllProducts from './pages/products/AllProducts'
import CartPage from './pages/products/CartPage'
import CheckoutPage from './pages/CheckoutPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import OrderViewPage from './pages/OrderViewPage.jsx'
import AdminHomePage from './pages/adminpages/AdminHomePage.jsx'
import AdminOrdersPage from './pages/adminpages/Orders/AdminOrdersPage.jsx'
import AdminOrderViewPage from './pages/adminpages/Orders/AdminOrderViewPage.jsx'
import { getAdminOrder, selectAdminOrderStatus } from './slices/AdminOrdersSlice.js'
import SearchProductsPage from './pages/products/SearchProductsPage.jsx'
import { addOrders } from './slices/OrderSlice.js'

function App() {

    const dispatch = useDispatch()

    const {user , isAuthenticated } = useAuth0()
    
    const ProductStatus = useSelector(getProductStatus)
    const adminOrderStatus = useSelector(selectAdminOrderStatus)

    const userCart = useSelector(selectUser)[0]?.orderDetails?.items_in_cart
    const userOrders = useSelector(selectUser)[0]?.orderDetails?.orders
    
    const handleRef = useRef(true)
    const handleRef1 = useRef(true)
    const handleRef3= useRef(true)
    const handleRef4= useRef(true)

    useEffect(()=>{
        if(isAuthenticated && handleRef1.current){
            dispatch(fetchUser(user.sub))
            handleRef1.current = false
        }
        if(ProductStatus == 'idle' && handleRef.current){
            dispatch(fetchProducts())
            handleRef.current = false
        }
        if(userCart){
            dispatch(addCartProduct({userCart}))
        }
        if(userOrders && handleRef4.current){
            dispatch(addOrders(userOrders))
            handleRef4.current = false
        }
        if(adminOrderStatus == 'idle' && handleRef3.current){
            dispatch(getAdminOrder())
            handleRef3.current = false
        }
    },[isAuthenticated , ProductStatus , userCart])

    return (
        <>
        <Toaster />
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='user-profile' element={<UserProfilePage />}/>
                <Route path='checkout' element={<CheckoutPage />}/>
                <Route path='orders' element={<OrdersPage />}/>
                <Route path='orders/:id' element={<OrderViewPage />}/>
                <Route path='cart' element={<CartPage />} />

                <Route path='/products'>
                    <Route index element={<AllProducts />} />
                    <Route path=':id' element={<div>jhbb</div>} />
                    <Route path='search' element={<SearchProductsPage />} />
                </Route>
            </Route>        

            <Route path='/admin' element={<AdminLayout />}>
                <Route index element={<AdminHomePage />} />
                <Route path='orders/:id' element={<AdminOrderViewPage />}/>

                <Route path='products'>
                    <Route index element={<AdminProductPage />} />
                    <Route path=':id' element={<AdminProductViewPage />} />
                    <Route path='add-product' element={<AddNewProductPage />} />
                </Route>

                <Route path='orders'>
                    <Route index element={<AdminOrdersPage />}/>
                </Route>
            </Route>

            <Route path='/auth-callback' element={<AuthCallBack />} />
            <Route path='/*' element={<>404</>}/>
        </Routes>
        </>
    )
}

export default App