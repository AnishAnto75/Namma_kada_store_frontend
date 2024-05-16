import React from 'react'

const OrderDeliveryAmountFeed = ({order}) => {
  return (
    <div className='px-2'>
        <h2 className='text-xl text-gray-600 underline underline-offset-2 mb-2'>Price details</h2>                

        <div>
            <p className='flex justify-between'>
                <span>Total Price</span>
                <span>&#8377;{order.total_mrp}</span>
            </p>
            <p className='flex justify-between'>
                <span>Selling Price</span>
                <span>&#8377;{order.total_price}</span>
            </p>
            <p className='flex justify-between'>
                <span>Delivery charges</span>
                <span>&#8377;{order.delivery_charges}</span>
            </p>
            <div className='divider m-0'></div>
            <p className='flex justify-between text-lg font-medium'>
                <span>Total Amount</span>
                <span>&#8377;{order.total_selling_price}</span>
            </p>
        </div>
    </div>
  )
}

export default OrderDeliveryAmountFeed