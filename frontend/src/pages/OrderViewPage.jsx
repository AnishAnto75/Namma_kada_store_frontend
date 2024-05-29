import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectOrderById } from '../slices/OrderSlice'

import OrderViewPagePhotos from '../components/orders/OrderViewPagePhotos'
import OrderStatusSteps from '../components/orders/OrderStatusSteps'
import OrderDeliveryAddress from '../components/orders/OrderDeliveryAddress'
import OrderDeliveryAmountFeed from '../components/orders/OrderDeliveryAmountFeed'
import { getUserStatus } from '../slices/UserSlice'
import OrderProductFeed from '../components/orders/OrderProductFeed'

const OrderViewPage = () => {
    const {id} = useParams() 

    const order = useSelector(state => selectOrderById(state , id))
    const userStatus = useSelector(getUserStatus)

    const delivery_details = order?.delivery_details
    const delivery_address = order?.delivery_address

    if(userStatus == 'idle' || userStatus == 'loading'){
        return <div className='h-screen hero'>Loading...</div>
    }

    if(!order){
        return (
            <div>
                No order found
            </div>
        )
    }
        
  return (
    <div className='p-2'>

        <div className='text-content'>Order Id : {order?._id}</div>
        
        <div className='border-2 border-dark_gray rounded-md p-1 mt-2'>
            <div className='h-36 flex gap-2 overflow-auto '>
                {order?.product_details.map(product => <OrderViewPagePhotos key={product._id} id={product.product_id} />)}
            </div>
            <span className='divider m-0'/>
            <div className='w-full text-lg px-2 py-1 text-content font-[arial]'>
                &#8377;{order?.total_price}
            </div>
        </div>

        <div className='mt-1 border-2 border-dark_gray rounded-md p-2'> 
            <OrderStatusSteps delivery_details = {delivery_details} id={order._id}/>
        </div>
       
        <div className='mt-1 border-2 border-dark_gray rounded-md p-2'> 
            <OrderProductFeed products = {order.product_details}/>
            <div className='h-4'></div>
        </div>

        <div className='mt-1 border-2 border-dark_gray rounded-md p-2'>
            <OrderDeliveryAmountFeed order={order}/>
        </div>
        
        <div className='mt-1 border-2 border-dark_gray rounded-md p-2'>
            <OrderDeliveryAddress delivery_address={delivery_address} />
        </div>
        
    </div>
  )
}

export default OrderViewPage