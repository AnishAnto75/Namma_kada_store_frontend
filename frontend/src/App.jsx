import { useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import { fetchUser, selectUser} from './slices/UserSlice'
import { fetchProducts, getProductStatus, selectAllProduct } from './slices/ProductSlice'

import AuthCallBack from './pages/AuthCallBack'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import UserProfilePage from './pages/UserProfilePage'
import AllProducts from './pages/products/AllProducts'

import AdminLayout from './layouts/Admin_layout'
import AdminProductPage from './pages/adminpages/products/AdminProductPage'
import AddNewProductPage from './pages/adminpages/products/AddNewProductPage'
import AdminProductViewPage from './pages/adminpages/products/AdminProductViewPage'
import CartPage from './pages/products/CartPage'
import { addCartProduct } from './slices/CartSlice.js'

function App() {

    const dispatch = useDispatch()
    const {user , isAuthenticated} = useAuth0()
    const handleRef = useRef(true)
    const handleRef1 = useRef(true)
    const ProductStatus = useSelector(getProductStatus)
    const userCart = useSelector(selectUser)[0]?.orderDetails?.items_in_cart
    const products = useSelector(selectAllProduct)

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
    },[isAuthenticated , ProductStatus , userCart])

    return (
        <>
        <Toaster />
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='user-profile' element={<UserProfilePage />}/>

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