import React from 'react'
import CheckoutProductCard from './CheckoutProductCard'

const CheckoutProductSummary = ({products}) => {

    const cartProductRender = products?.map((product => <CheckoutProductCard key={product.product_id._id} product={product}/>)) 

  return (
    <div className='space-y-1 bg-gray p-2 rounded-md mb-2'>{cartProductRender}</div>
  )
}

export default CheckoutProductSummary