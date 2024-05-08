import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { selectAllCartProducts, selectCartDeliveryCharges, selectCartTotalAmount, selectTotalMrp, selectTotalSellingPrice } from '../../slices/CartSlice'
import {selectUser, selectUserIds} from '../../slices/UserSlice.js'

const CheckoutPaymentMethod = () => {

    // const [paymentType , setPaymentType] = useState('cash_on_delivery')

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

    console.log('order details : ',order)

    return (
        <div>
            <div className='flex gap-2 h-5 m-2'>
                <input 
                    type="radio" 
                    name='cash_on_delivery'
                    defaultChecked
                    // value={paymentType}
                    // onChange={()=>setPaymentType('cash_on_delivery')}
                    className="mt-0.5 radio radio-info h-5 w-5"
                    />
                <span>Cash on Delivery</span>
            </div>
            <button className='btn bg-sky-400 text-white hover:bg-sky-500 mt-3'>Confirm order</button>
        </div>
    )
}

export default CheckoutPaymentMethod