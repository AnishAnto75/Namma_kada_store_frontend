import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectOrderById } from '../slices/OrderSlice'
import OrderViewPagePhotos from '../components/orders/OrderViewPagePhotos'

const OrderViewPage = () => {
    const {id} = useParams() 

    const order = useSelector(state => selectOrderById(state , id))
    let productDetails = order?.product_details

    const productImages = productDetails?.map(product => <OrderViewPagePhotos key={product._id} id={product.product_id} />)

  return (
    <div className='p-2'>

        <div className='text-gray-600 mb-3'>Order Id : {order?._id}</div>
        
        <div className='shadow-md border p-1'>
            <div className='h-36 flex gap-2 overflow-auto '>
                {productImages}
            </div>
            <div className='w-full px-5 py-1 justify-between flex'>
                <span className='font-sans my-2 text-2xl'>&#8377;{order?.total_selling_price}</span>
                <button className='bg-teal-300 text-white p-2 h-full mt-1 rounded-lg hover:bg-teal-400 justify-end items-end'>
                    view more
                </button>
            </div>
        </div>

        <div className='mt-5'>
            <ul className="steps steps-vertical lg:steps-horizontal w-full">
                <li className="step step-accent">Pending</li>
                <li className="step step-accent">Order confirmed</li>
                <li className="step step-accent">Out For Delivery</li>
                <li className="step step-error">Delivered</li>
            </ul>
        </div>
    </div>
  )
}

export default OrderViewPage