import React from 'react'
import { useSelector } from 'react-redux'
import { selectProductById } from '../../slices/ProductSlice'
import {Link} from 'react-router-dom'

const OrderProductCard = ({product}) => {

    const productPhoto = useSelector(state => selectProductById(state , product.product_id)).product_photos
    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${productPhoto}`

  return (
    <Link to={`/products/${product.product_id}`} className='border rounded-lg border-dark_gray flex'>
            <div className='h-28 min-h-28 max-h-28 min-w-28 max-w-28 p-0.5 border-r border-dark_gray'>
                <img 
                    src={PRODUCT_IMAGE_URL} alt={product.product_name} 
                    className='h-full w-full object-contain'
                />
            </div>
            <div className='w-full px-3 h-full py-4'>
                <div className='font-[arial] text-content'>{product.product_name}</div>    
                <div className='font-[arial] text-content pt-1'>{product.no_of_product} Quantity</div>
                <div className='font-[arial] text-content pt-1'>&#8377;{product.product_price}</div>           
            </div>
    </Link>
    )
}

export default OrderProductCard