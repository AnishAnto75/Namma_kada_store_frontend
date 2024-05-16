import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { selectAdminOrderStatus, updateAdminOrderStatus } from '../../../slices/AdminOrdersSlice'

const AdminOrderStatusFeed = ({delivery_details , id}) => {

    const dispatch = useDispatch()

    const adminOrderStatus = useSelector(selectAdminOrderStatus)

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
    const data = canceled ? false  : delivered ? "Delivered" : out_for_delivery ? "Confirm Deliver" : confirmed ? "Out For Delivery" : pending ? "confirm order" : ''

    const date = (date)=>{
        const dateTime = `(${format(new Date(date) , "dd-MM-yyyy , h:mm aaa")})`
        return dateTime
    }

    const cancelOrder = ()=>{
        dispatch(updateAdminOrderStatus({order_status : 'canceled' , id}))
    }

    const upadteOrder = ()=>{
        const order_status = out_for_delivery ? "delivered" : confirmed ? "out_for_delivery" : pending ? "order_confirmed" : ''
        dispatch(updateAdminOrderStatus({order_status , id}))
    }

    return (
        <>
            <div className='text-xl md:text-center px-2 md:pt-5 md:pb-8 text-gray-700 font-medium md:underline underline-offset-2'>
                Delivery status
            </div>   

            <ul className="steps steps-vertical md:steps-horizontal w-full text-[17px] md:mb-5">

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

            <div className='divider m-0' />

            {adminOrderStatus == 'loading' &&
                <div className='flex text-center'>
                    <button className='bg-sky-400 w-full p-1 text-[17px] rounded-xl text-white cursor-wait'>
                        Loading...        
                    </button>
                </div>
            }

            <div className={`flex text-center ${adminOrderStatus == 'loading' && 'hidden'}`}>

                {!delivered && 
                <div className='w-full'>
                    <button 
                        className={`bg-rose-500 w-full p-1 text-[17px] rounded-xl text-white ${ !canceled && 'cursor-pointer hover:shadow-md hover:bg-rose-400 transition-shadow'}`}
                        disabled = {canceled}
                        onClick={()=>document.getElementById('my_modal_1').showModal()}
                        >
                        {canceled ? 'Canceled' : 'Cancel'}
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Cancel Confirmation</h3>
                            <p className="py-4 text-start">Do you really want to <span className='italic font-medium'>cancel</span> the order</p>
                            <div className='text-end'>
                                <form method="dialog">
                                    <button 
                                        onClick={()=>cancelOrder()}
                                        className='btn text-white hover:translate-y-1 btn-error'
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                }

                {!canceled && 
                <div className='w-full'>
                    <button 
                        className={`bg-sky-400 w-full p-1 text-[17px] rounded-xl text-white  ${ !delivered && 'cursor-pointer hover:shadow-md hover:bg-sky-300 transition-shadow'}`}
                        disabled = {delivered}
                        onClick={()=>document.getElementById('my_modal_2').showModal()}
                        >
                        {data}
                    </button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Order</h3>
                            <p className="py-4 text-start">Do you really want to make the order status to <span className='italic font-medium'>{data}</span></p>
                            <div className='text-end'>
                                <form method="dialog">
                                    <button 
                                        onClick={()=> upadteOrder()}
                                        className='btn text-white hover:translate-y-1 btn-info'
                                    >
                                        Confirm
                                    </button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                }
            </div>
        </>
    )
}

export default AdminOrderStatusFeed