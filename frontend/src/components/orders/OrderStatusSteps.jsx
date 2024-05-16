import { format } from 'date-fns'

const OrderStatusSteps = ({delivery_details}) => {

    let pending  
    let confirmed 
    let out_for_delivery 
    let delivered 
    let canceled 

    delivery_details?.map(details => 
        details.order_status == 'pending' ? pending = details 
        :details.order_status == 'order_confirmed' ? confirmed = details 
        :details.order_status == 'out_for_delivery' ? out_for_delivery = details 
        :details.order_status == 'delivered' ? delivered = details 
        :details.order_status == 'canceled' ? canceled = details : ''
    )

    const date = (date)=>{
        const dateTime = `(${format(new Date(date) , "dd-MM-yyyy , h:m aaa")})`
        return dateTime
    }

    return (
        <div>
            <div className='text-xl md:text-center px-2 md:pt-5 md:pb-8 text-gray-700 font-medium md:underline underline-offset-2'>
                Delivery status
            </div>   

            <ul className="steps steps-vertical md:steps-horizontal w-full text-start text-[17px] md:mb-5">

                <li data-content="✓" className={`step ${pending && 'step-info'}`}>
                    <span>Pending 
                        <span className='text-gray-600 md:block'> {pending && date(pending.date) }</span>
                    </span>
                </li>
                <li data-content="✓" className={`step ${confirmed && 'step-info'}`}>
                    <span>Order Confirmed 
                        <span className='text-gray-600 md:block'>{confirmed && date(confirmed.date)}</span>
                    </span>
                </li>
                <li data-content="✓" className={`step ${out_for_delivery && 'step-info'}`}>
                    <span>Out For Delivery 
                        <span className='text-gray-600 md:block'>{out_for_delivery && date(out_for_delivery.date) }</span>
                    </span>
                </li>
                {canceled ? 
                    <li data-content="✕" className='step step-error'>
                        <span className='text-red-500'>Canceled 
                            <span className='text-gray-600 md:block'>{canceled && date(canceled.date)}</span>
                        </span>
                    </li>
                :
                <li data-content="✓" className={`step ${delivered && 'step-info'}`}>
                        <span>Delivered 
                            <span className='text-gray-600 md:block'>{delivered && date(delivered.date)}</span>
                        </span>
                    </li>
                }

            </ul>    
        </div>
    )
}

export default OrderStatusSteps