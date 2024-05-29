import React from 'react'
import { useSelector } from 'react-redux'
import { selectProductById } from '../../slices/ProductSlice'

const OrderProductPhoto = ({id , count}) => {
    const productPhoto = useSelector(state => selectProductById(state , id))?.product_photos

    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${productPhoto}`

  return (
    <div className="avatar border border-gray rounded-full">
        <div className={`${count == 1 ? 'w-full p-1' : 'size-[54px] rounded-full  bg-white p-0.5'}`}>
            <img src={PRODUCT_IMAGE_URL} className='object-none '/>
        </div>
    </div>
  )
}

export default OrderProductPhoto