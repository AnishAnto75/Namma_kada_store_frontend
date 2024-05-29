import React from 'react'
import OrderProductCard from './OrderProductCard'

const OrderProductFeed = ({products}) => {

  return (
    <>
    <div className='text-xl text-center pt-3 pb-5 text-lite_content font-medium md:underline underline-offset-2 '>Products</div>
    <div className='space-y-0.5'>
        {products?.map(product => <OrderProductCard key={product._id} product={product}/>)}
    </div>
    </>
  )
}

export default OrderProductFeed