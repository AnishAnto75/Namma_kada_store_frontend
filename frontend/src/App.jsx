import { useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import { fetchUser, selectUser, selectUserIds} from './slices/UserSlice'
import { fetchProducts, getProductStatus, selectAllProduct } from './slices/ProductSlice'
import { addCartProduct } from './slices/CartSlice.js'

import AuthCallBack from './pages/AuthCallBack'

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
import { getOrder } from './slices/OrderSlice.js'
import OrderViewPage from './pages/OrderViewPage.jsx'

function App() {

    const dispatch = useDispatch()

    const {user , isAuthenticated } = useAuth0()
    
    const ProductStatus = useSelector(getProductStatus)
    const userCart = useSelector(selectUser)[0]?.orderDetails?.items_in_cart
    const products = useSelector(selectAllProduct)
    const userId = useSelector(selectUserIds)[0]
    
    const handleRef = useRef(true)
    const handleRef1 = useRef(true)
    const handleRef2 = useRef(true)

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
            dispatch(addCartProduct({userCart , products}))
        }
        if(userId && handleRef2.current){
            dispatch(getOrder(userId))
            handleRef2.current = false
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
                
                <Route path='/products'>
                    <Route index element={<AllProducts />} />
                    <Route path='cart' element={<CartPage />} />
                </Route>
            </Route>        

            <Route path='/admin' element={<AdminLayout />}>
                <Route path='products'>
                    <Route index element={<AdminProductPage />} />
                    <Route path=':id' element={<AdminProductViewPage />} />
                    <Route path='add-product' element={<AddNewProductPage />} />
                </Route>
            </Route>

            <Route path='/auth-callback' element={<AuthCallBack />} />
            <Route path='/*' element={<>404</>}/>
        </Routes>
        </>
    )
}

export default App