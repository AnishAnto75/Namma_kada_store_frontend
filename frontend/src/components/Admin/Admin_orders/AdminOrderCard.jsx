import React from 'react'
import OrderProductPhoto from '../../orders/OrderProductPhoto'
import {Link} from 'react-router-dom'
import {format} from 'date-fns'

const AdminOrderCard = ({order}) => {

    let productDetails = order.product_details
    let count = productDetails?.length 

    if (productDetails?.length > 3){
        productDetails = productDetails.slice(1 , 4)
    }

    const productImages = productDetails?.map(product => <OrderProductPhoto key={product._id} id={product.product_id} count = {count}/>)
    const statusTime = order?.delivery_details[order?.delivery_details.length-1]?.date

    return (
        <Link to={`${order?._id}`}>
            <div className='flex h-[139px] mb-5 md:mb-4 shadow'>
                <div className='h-full w-[140px] min-w-[140px] p-1 shadow'>
                    <div className={` ${count == 1 ? '' : 'avatar-group'} flex flex-wrap gap-1`}>
                        {productImages}
                        {count > 3 &&
                            <div className="avatar border placeholder rounded-full">
                                <div className="w-[62px]">
                                    <span>+{count -3}</span>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <div className='p-5 flex justify-between h-full w-full py-[60px]'>
                    <span className='text-lg font-sans'>{order?.delivery_details[order.delivery_details.length -1]?.order_status}</span>
                    <span className='text-lg font-sans'>&#8377;{order?.total_selling_price}</span>
                    <span className=''>{statusTime && format(new Date(statusTime) , 'dd/MM , h:m aaa')}</span>
                </div>
            </div>
        </Link>
    )
}

export default AdminOrderCard