import React from 'react'
import { useSelector } from 'react-redux'
import { selectProductById } from '../../slices/ProductSlice'

const OrderProductPhoto = ({id , count}) => {
    const productPhoto = useSelector(state => selectProductById(state , id))?.product_photos

    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${productPhoto}`

  return (
    <div className="avatar border bg-slate-200 rounded-full">
        <div className={`${count == 1 ? 'w-full rounded-full' : 'w-[62px] rounded-full'} `}>
            <img src={PRODUCT_IMAGE_URL} />
        </div>
    </div>
  )
}

export default OrderProductPhoto