import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectOrderById } from '../slices/OrderSlice'

import OrderViewPagePhotos from '../components/orders/OrderViewPagePhotos'
import OrderStatusSteps from '../components/orders/OrderStatusSteps'
import OrderDeliveryAddress from '../components/orders/OrderDeliveryAddress'
import OrderDeliveryAmountFeed from '../components/orders/OrderDeliveryAmountFeed'

const OrderViewPage = () => {
    const {id} = useParams() 

    const order = useSelector(state => selectOrderById(state , id))

    const delivery_details = order?.delivery_details
    const delivery_address = order?.delivery_address

    if(!order){
        return <div>loading...</div>
    }

    console.log(order)

  return (
    <div className='p-2'>

        <div className='text-gray-600 mb-3'>Order Id : {order?._id}</div>
        
        <div className='shadow-md border p-1'>
            <div className='h-36 flex gap-2 overflow-auto '>
                {order.product_details?.map(product => <OrderViewPagePhotos key={product._id} id={product.product_id} />)}
            </div>
            <span className='divider m-0'/>
            <div className='w-full px-1 pl-5 pb-1 justify-between flex'>
                <span className='font-sans my-1 text-2xl'>&#8377;{order?.total_selling_price}</span>
                <button className='bg-teal-300 text-white p-2 h-full rounded-lg hover:bg-teal-400 justify-end items-end'>
                    view more
                </button>
            </div>
        </div>

        <div className='mt-5 shadow-md border p-2'> 
            <OrderStatusSteps delivery_details = {delivery_details}/>
            <div className='divider m-0 '/>
            <div className='text-xl text-gray-600 text-center pb-2'>
                {/* contact details */}
                <button className='px-5 p-1 hover:text-black '>
                    contact us
                </button>
            </div>
        </div>

        <div className='mt-5 shadow-md border p-2'>
            <OrderDeliveryAmountFeed order={order}/>
        </div>
        
        <div className='mt-5 shadow-md border p-2'>
            <OrderDeliveryAddress delivery_address={delivery_address} />
        </div>
        
    </div>
  )
}

export default OrderViewPage