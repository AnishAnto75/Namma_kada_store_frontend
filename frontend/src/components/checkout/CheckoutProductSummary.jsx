import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartIdAndNo } from '../../slices/CartSlice.js'
import CheckoutProductCard from './CheckoutProductCard'

const CheckoutProductSummary = () => {

    const cartProductsIdObject = useSelector(selectCartIdAndNo)

    const cartProductRender = cartProductsIdObject?.map((product => <CheckoutProductCard key={product.product_id} id={product.product_id}/>)) 

  return (
    <div className='space-y-2'>{cartProductRender}</div>
  )
}

export default CheckoutProductSummary