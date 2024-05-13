import React from 'react'
import { selectProductById } from '../../slices/ProductSlice'
import { useSelector } from 'react-redux'

const OrderViewPagePhotos = ({id}) => {
    const productPhoto = useSelector(state => selectProductById(state , id))?.product_photos

    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${productPhoto}`

  return (
    <div className="h-full min-w-32 max-w-32">
        <img src={PRODUCT_IMAGE_URL} className='h-full w-full object-contain '/>
    </div>
  )
}

export default OrderViewPagePhotos