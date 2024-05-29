import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { cancelOrderStatus } from '../../slices/OrderSlice'
import toast from 'react-hot-toast'

const OrderStatusSteps = ({delivery_details , id}) => {

    const dispatch = useDispatch()

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
        const dateTime = `(${format(new Date(date) , "dd-MM-yyyy , h:mm aaa")})`
        return dateTime
    }
    
    const cancelOrder = ()=>{
        dispatch(cancelOrderStatus({id}))
    }

    return (
        <div>
            <div className='text-xl text-center pt-5 md:pb-8 text-content font-medium md:underline underline-offset-2'>
                Delivery status
            </div>   

            <ul className="steps steps-vertical md:steps-horizontal w-full text-start text-[17px] md:mb-5 text-content">

                <li data-content="✓" className={`step ${pending && 'step-info'}`}>
                    <span>Placed 
                        <span className='md:block'> {pending && date(pending.date) }</span>
                    </span>
                </li>
                <li data-content="✓" className={`step ${confirmed && 'step-info'}`}>
                    <span>Order Confirmed 
                        <span className='md:block'>{confirmed && date(confirmed.date)}</span>
                    </span>
                </li>
                <li data-content="✓" className={`step ${out_for_delivery && 'step-info'}`}>
                    <span>Out For Delivery 
                        <span className='md:block'>{out_for_delivery && date(out_for_delivery.date) }</span>
                    </span>
                </li>
                {canceled ? 
                    <li data-content="✕" className='step step-error'>
                        <span className=''>Canceled 
                            <span className='md:block'>{canceled && date(canceled.date)}</span>
                        </span>
                    </li>
                :
                <li data-content="✓" className={`step ${delivered && 'step-info'}`}>
                        <span>Delivered 
                            <span className='md:block'>{delivered && date(delivered.date)}</span>
                        </span>
                    </li>
                }
            </ul>  
            <div className='divider m-0 '/>
            <div className='w-full flex'>
                <button 
                className={`bg-second w-full p-1 rounded-full ${canceled && 'hidden'} text-white mr-1`}
                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                    >
                    Cancel
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-[arial] text-xl">Cancel Confirmation</h3>
                        <p className="p-2 text-start">Do you really want to <span className='italic font-medium'>cancel</span> the order</p>
                        <div className='text-end'>
                            <form method="dialog">
                                <button 
                                    onClick={()=>cancelOrder()}
                                    className='btn text-white btn-error hover:translate-y-1'
                                    >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <button 
                    onClick={()=>toast.error('Contact us not created yet')}
                    className='w-full bg-third p-1 rounded-full text-white'>Contact us</button>
            </div>
        </div>
    )
}

export default OrderStatusSteps
