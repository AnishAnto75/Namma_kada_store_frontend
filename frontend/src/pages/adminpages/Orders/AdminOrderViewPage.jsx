import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { selectAdminOrderById } from '../../../slices/AdminOrdersSlice'
import { useSelector } from 'react-redux'

import OrderViewPagePhotos from '../../../components/orders/OrderViewPagePhotos'
import OrderDeliveryAddress from '../../../components/orders/OrderDeliveryAddress'
import OrderDeliveryAmountFeed from '../../../components/orders/OrderDeliveryAmountFeed'
import AdminOrderProductCard from '../../../components/Admin/Admin_orders/AdminOrderProductCard'
import AdminOrderStatusFeed from '../../../components/Admin/Admin_orders/AdminOrderStatusFeed'

const AdminOrderViewPage = () => {

    const {id} = useParams()

    const order = useSelector(state => selectAdminOrderById(state , id))

    const delivery_details = order?.delivery_details
    const delivery_address = order?.delivery_address
    const product_details = order?.product_details

    if(!order){
        return <div>loading...</div>
    }

  return (
    <div className='p-2'>

        <div className='text-gray-600 mb-3'>Order Id : {order?._id}</div>

        <div className='shadow-md border p-1'>
            <div className='h-36 flex gap-2 overflow-auto '>
                {order.product_details?.map(product => <OrderViewPagePhotos key={product._id} id={product.product_id} />)}
            </div>
            <span className='divider m-0'/>
            <div className='w-full px-1 pl-5 pt-1 pb-2 '>
                <span className='font-sans my-1 text-2xl'>&#8377;{order?.total_selling_price}</span>
            </div>
        </div>

        <div className='mt-5 shadow-md border p-2'>      
            <AdminOrderStatusFeed delivery_details = {delivery_details} id = {id}/>
        </div>

        <div className='mt-3 shadow border p-2 '>  
            Payment method : <span className='text-sky-600 italic font-medium'>{order.payment_method}</span>    
        </div>

        <div className='mt-3 shadow-md border p-2 space-y-2'>      
            {product_details?.map(product => <AdminOrderProductCard key={product._id} product={product}/>)}
        </div>
        
        <div className='mt-5 shadow-md border p-2'>
            <OrderDeliveryAmountFeed order={order}/>
        </div>

        <div className='mt-5 shadow-md border p-2'>
            <OrderDeliveryAddress delivery_address={delivery_address} />
        </div>

    </div>
  )
}

export default AdminOrderViewPage