import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { removeCart, selectAllCartProducts, selectCartDeliveryCharges, selectCartTotalAmount, selectTotalMrp, selectTotalSellingPrice } from '../../slices/CartSlice'
import {selectUser, selectUserIds} from '../../slices/UserSlice.js'
import { changeState, createOrder, selectOrderStatus } from '../../slices/OrderSlice.js'
import { useNavigate } from 'react-router-dom'

const CheckoutPaymentMethod = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRef = useRef(true)

    const orderStatus = useSelector(selectOrderStatus)

    useEffect(()=>{
        if(orderStatus == 'succeded' && handleRef.current){
            dispatch(removeCart())
            dispatch(changeState('idle'))
            handleRef.current = false
            navigate('/')
        }
    } , [orderStatus])

    const Address = useSelector(selectUser)[0]?.address
    const user = useSelector(selectUser)[0]

    const user_id = useSelector(selectUserIds)[0]
    const total_mrp = useSelector(selectTotalMrp)
    const total_price = useSelector(selectTotalSellingPrice)
    const delivery_charges = useSelector(selectCartDeliveryCharges)
    const total_selling_price = useSelector(selectCartTotalAmount)
    const products = useSelector(selectAllCartProducts)

    const payment_method = 'cash_on_delivery'
    const city = Address?.city
    const pincode = Address?.pincode
    const address = Address?.address
    const district = Address?.district
    const phone_number = user?.phoneNumber

    const delivery_address = {
        city , pincode , address , district , phone_number
    }
    const delivery_details = {
        order_status : "pending" , date : new Date
    }
    const product_details = []
    products.map(product => {
        const products = {
            product_id : product._id , 
            product_name : product.product_name ,
            product_mrp : product.product_mrp,
            product_price : product.product_price,
            product_manufacture_date : product.product_manufacture_date,
            product_expire_date : product.product_expire_date,
            no_of_product : product.no_of_product  
        } 
        product_details.push(products)
    })

    const order = {user_id , total_mrp , total_price , delivery_charges , total_selling_price , payment_method , delivery_address , delivery_details , product_details }

    const placeOrder = ()=>{
        dispatch(createOrder(order))
    }

    return (
        <div>
            <div className='flex gap-2 h-5 m-2'>
                <input 
                    type="radio" 
                    name='cash_on_delivery'
                    defaultChecked
                    className="mt-0.5 radio radio-info h-5 w-5"
                    />
                <span>Cash on Delivery</span>
            </div>
            <button 
                onClick={()=>placeOrder()}
                disabled = {orderStatus == 'loading'}
                className='btn bg-third text-white hover:grayscale mt-3'
                >Confirm order
            </button>
        </div>
    )
}

export default CheckoutPaymentMethod