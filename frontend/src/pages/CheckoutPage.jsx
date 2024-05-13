import { useEffect, useRef, useState } from 'react'
import CartAmountFeed from '../components/products/CartAmountFeed'
import CheckoutAddress from '../components/checkout/CheckoutAddress'
import { FaCheckCircle } from "react-icons/fa";
import CheckoutProductSummary from '../components/checkout/CheckoutProductSummary';
import CheckoutPaymentMethod from '../components/checkout/CheckoutPaymentMethod';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/UserSlice';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {

    const [addressSuccess , setAddressSuccess] = useState('idle')
    const [orderSummarySuccess , setOrderSummarySuccess] = useState('idle')
    const handleRef = useRef(true)
    const navigate = useNavigate()

    const user = useSelector(selectUser)[0]
    const address = user?.address

    useEffect(()=>{
        if (user && address && handleRef.current){
            if (user.phoneNumber && address?.city && address?.pincode && address?.district && address?.address){
                setAddressSuccess('ok')
                handleRef.current = false
            }else{
                setAddressSuccess('notOk')
            }
        }
        if(user){
            if(!user.orderDetails.items_in_cart.length){
                navigate('/products/cart')
            }
        }
    },[user])

    return (
        
    <div className='flex flex-col md:flex-row md:p-5 p-2 gap-5 justify-center min-h-screen'>
        <div className='md:w-3/5 w-full rounded-md space-y-1'>

            <div className="collapse border rounded-lg">
                <input type="radio" name="my-accordion-3" checked={addressSuccess == 'notOk' || 'ok'} onChange={()=>setAddressSuccess('idle')} />
                <div className="flex collapse-title font-[arial] text-gray-600 justify-between">
                    <span className='text-xl flex gap-1'>Address {addressSuccess == 'success' ? <FaCheckCircle className='h-4 text-sky-400 mt-1'/> :''}</span>
                </div>
                <div className="collapse-content h-full w-full"> 
                    <div className='divider m-0 h-3'/>
                    <CheckoutAddress setAddressSuccess = {setAddressSuccess} />
                    <button 
                        onClick={()=> addressSuccess == 'ok' ? setAddressSuccess('success') : addressSuccess == 'idle' ? setAddressSuccess('success') : ''}
                        className='btn m-1 bg-sky-400 text-white hover:bg-sky-500'
                        >Delivery Here
                    </button>
                </div>
            </div>

            <div className="collapse border rounded-lg">
                <input type="radio" name="my-accordion-3" checked={addressSuccess == 'success' && orderSummarySuccess == 'idle'} onChange={()=>setOrderSummarySuccess('idle')}/> 
                <div className="collapse-title text-xl font-[arial] text-gray-600">
                <span className='text-xl flex gap-1'>Order Summary {orderSummarySuccess == 'success' ? <FaCheckCircle className='h-4 text-sky-400 mt-1'/> :''}</span>
                </div>
                <div className="collapse-content"> 
                    <CheckoutProductSummary />
                    <button 
                        onClick={()=>setOrderSummarySuccess('success')}
                        className='btn bg-sky-400 text-white hover:bg-sky-500 mt-1'
                        >Place Order
                    </button>
                </div>
            </div>

            <div className="collapse border rounded-lg">
                <input type="radio" name="my-accordion-3" checked={addressSuccess == 'success' && orderSummarySuccess == 'success'} onChange={()=>''} /> 
                <div className="collapse-title text-xl font-[arial] text-gray-600">
                    Payment method
                </div>
                <div className="collapse-content"> 
                    <CheckoutPaymentMethod />
                </div>
            </div>

        </div>
        <div className='md:w-1/4 w-full p-5 lg:h-52 md:h-60 rounded-md shadow-sm md:block sticky top-2'>
            <CartAmountFeed />
        </div>
    </div>
  )
}

export default CheckoutPage