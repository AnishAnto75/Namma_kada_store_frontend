import React from 'react'
import {useSelector} from 'react-redux'
import {selectAllOrders} from '../slices/OrderSlice'
import OrderCard from '../components/orders/OrderCard'
import { getUserStatus } from '../slices/UserSlice'

const OrdersPage = () => {

    const orders = useSelector(selectAllOrders).toReversed()

    const userStatus = useSelector(getUserStatus)

    if(userStatus == 'idle' || userStatus == 'loading' ){
        return (<div className='hero h-screen '>loading...</div>)
    }

    if(!orders.length){
        return (
            <div className='h-screen hero font-[cursive] tracking-tighter text-[35px] text-content'>
                no orders placed yet
            </div>
        )
    }

    const ordersRender = orders?.map(order => <OrderCard key={order._id} order={order} />)

  return (
    <div className='p-2 min-h-4/5'>
        <div className='h-12 mb-2 text-second hero text-2xl font-medium shadow-sm bg-gray'>
            Orders
        </div>
        {ordersRender}
        <div className='text-center'>thats all...</div>
    </div>
    )
}

export default OrdersPage