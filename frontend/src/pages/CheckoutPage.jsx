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

    useEffect(()=>{
        if (user && handleRef.current){
            if (user.phoneNumber && user.address?.city && user.address?.pincode && user.address?.district && user.address?.address){
                setAddressSuccess('ok')
                handleRef.current = false
            }else{
                setAddressSuccess('notOk')
            }
        }
        if(user){
            if(!user.orderDetails.items_in_cart.length){
                navigate('/cart')
            }
        }
    },[user])

    if(!user){
        return <>loading...</>
    }

    return (

    <div className='flex flex-col md:flex-row md:p-5 p-2 gap-5 justify-center min-h-screen  '>
        <div className='md:w-3/5 w-full rounded-md space-y-1'>

            <div className="collapse border rounded-lg">
                <input type="radio" name="my-accordion-3" checked={addressSuccess == 'notOk' || 'ok'} onChange={()=>setAddressSuccess('idle')} />
                <div className="flex collapse-title font-[arial] text-content justify-between">
                    <span className='text-xl flex gap-1'>Address {addressSuccess == 'success' ? <FaCheckCircle className='h-4 text-third mt-1'/> :''}</span>
                </div>
                <div className="collapse-content h-full w-full"> 
                    <div className='divider m-0 '/>
                    <CheckoutAddress user = {user} />
                    <button 
                        onClick={()=> addressSuccess == 'ok' ? setAddressSuccess('success') : addressSuccess == 'idle' ? setAddressSuccess('success') : ''}
                        className='btn m-1 bg-third text-white hover:grayscale'
                        >Delivery Here
                    </button>
                </div>
            </div>

            <div className="collapse border rounded-lg">
                <input type="radio" name="my-accordion-3" checked={addressSuccess == 'success' && orderSummarySuccess == 'idle'} onChange={()=>setOrderSummarySuccess('idle')}/> 
                <div className="collapse-title text-xl font-[arial] text-content">
                <span className='text-xl flex gap-1'>Order Summary {orderSummarySuccess == 'success' ? <FaCheckCircle className='h-4 text-third mt-1'/> :''}</span>
                </div>
                <div className="collapse-content px-2 "> 
                    <CheckoutProductSummary products = {user.orderDetails.items_in_cart}/>
                    <button 
                        onClick={()=>setOrderSummarySuccess('success')}
                        className='btn bg-third text-white hover:grayscale '
                        >Place Order
                    </button>
                </div>
            </div>

            <div className="collapse border rounded-lg ">
                <input type="radio" name="my-accordion-3" checked={addressSuccess == 'success' && orderSummarySuccess == 'success'} onChange={()=>''} /> 
                <div className="collapse-title text-xl font-[arial] text-content">
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