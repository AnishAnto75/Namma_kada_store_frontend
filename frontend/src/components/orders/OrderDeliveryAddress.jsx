import React from 'react'

const OrderDeliveryAddress = ({delivery_address}) => {
  return (
    <>
    <h2 className='text-xl text-gray-600 underline underline-offset-4 mb-2'>Delivery Address</h2>                
    <address>
        <p>Name : {delivery_address.name}</p>
        <p>Address :</p>
        <p className='pl-5 flex flex-col'>
            <span>{delivery_address.address},</span>
            <span>{delivery_address.city} , {delivery_address.pincode},</span>
            <span>{delivery_address.district},</span>
        </p>
        <p>Email :  {delivery_address.email}</p>
        <p>Phone No : {delivery_address.phone_number}</p>
    </address>
    </>
  )
}

export default OrderDeliveryAddress