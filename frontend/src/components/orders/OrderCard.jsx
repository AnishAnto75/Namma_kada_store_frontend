import React from 'react'
import {Link} from 'react-router-dom' 
import OrderProductPhoto from './OrderProductPhoto'
import { format} from 'date-fns'

const OrderCard = ({order}) => {

    let productDetails = order.product_details

    let count = productDetails?.length 

    if (productDetails?.length > 3){
        productDetails = productDetails.slice(1 , 4)
    }

    const productImages = productDetails?.map(product => <OrderProductPhoto key={product._id} id={product.product_id} count = {count}/>)
    const deliverStatus = order?.delivery_details[order.delivery_details.length -1]
    const placedStatus = order?.delivery_details[0]

    const date=(time)=>{
        return format(new Date(time) , 'MMM dd').toLowerCase()
    }

    return (
        <Link to={`${order?._id}`}>
            <div className='flex h-[125px] border-2 border-gray mb-1 '>
                <div className='h-full w-[125px] min-w-[125px] p-1 border-r bg-white border-gray'>
                    <div className={` ${count == 1 ? '' : 'avatar-group'} flex flex-wrap gap-1`}>
                        {productImages}
                        {count > 3 ? 
                            <div className="avatar border placeholder rounded-full">
                                <div className="w-[54px]">
                                    <span>+{count -3}</span>
                                </div>
                            </div>
                        : ''
                    }
                    </div>
                </div>

                <div className='px-5 py-4 h-full w-full'>
                    <div className='text-[17px]'>
                        {deliverStatus.order_status == 'canceled' ? 
                            <div className='py-4'>
                                <div className='text-second font-[arial]'> 
                                    Canceled on <span className='italic font-[arial]'>{date(deliverStatus.date)}</span> 
                                </div>
                                <div className='text-lite_content text-[16px]  mt-1.5'><span className='font-[arial] text-[15px]'>{count}</span> products</div>
                            </div>
                        :
                        deliverStatus.order_status == 'delivered' ? 
                            <div className='py-4'>
                                <div className='text-success font-[arial]'>
                                    Delivered on <span className='italic font-[arial]'>{date(deliverStatus.date)}</span>
                                </div>
                                <div className="rating mt-4">
                                    <div className="flex items-center">
                                        <button className='text-success'>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                        </button>
                                        <button className='text-success'>
                                            <svg className="w-5 h-5 ms-1" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                        </button>
                                        <button className='text-lite_content'>
                                            <svg className="w-5 h-5 ms-1" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                        </button>
                                        <button className='text-lite_content'>
                                            <svg className="w-5 h-5 ms-1" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                        </button>
                                        <button className='text-lite_content'>
                                            <svg className="w-5 h-5 ms-1" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div> 
                        : 
                            <div className='text-content font-[arial] py-4'>
                                Placed on <span className='italic'>{date(placedStatus.date)}</span>
                                <div className='text-content text-[16px]  mt-1.5'><span className='font-[arial] text-[15px]'>{count}</span> products</div>
                            </div> 
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default OrderCard