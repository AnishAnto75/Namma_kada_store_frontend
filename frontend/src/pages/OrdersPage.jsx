import React from 'react'
import {useSelector} from 'react-redux'
import {selectOrderIds } from '../slices/OrderSlice'
import OrderCard from '../components/orders/OrderCard'

const OrdersPage = () => {

    const ordersId = useSelector(selectOrderIds)
    
    if(!ordersId.length){
        return (
            <div className='h-screen hero font-mono tracking-tighter text-[35px] text-gray-700'>
                no orders placed yet
            </div>
        )
    }

    const ordersRender = ordersId?.map(orderId => <OrderCard key={orderId} id={orderId} />)

  return (
    <div className='p-2'>
        <div className='h-12 mb-2 text-slate-600 hero text-2xl font-medium shadow-md bg-slate-50'>
            Orders
        </div>
        {ordersRender}
    </div>
  )
}

export default OrdersPage