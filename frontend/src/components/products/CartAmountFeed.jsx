import React from 'react'
import { selectCartDeliveryCharges, selectCartDiscount, selectCartTotalAmount, selectTotalMrp } from '../../slices/CartSlice'
import { useSelector } from 'react-redux'

const CartAmountFeed = () => {
    const totalMrp = useSelector(selectTotalMrp)
    const discount = useSelector(selectCartDiscount)
    const deliveryCharges = useSelector(selectCartDeliveryCharges)
    const totalAmount = useSelector(selectCartTotalAmount)

    return (
        <div className='text-start'>
            <div className='text-xl text-lite_content'>
                Price Details
            </div>
            <div className='divider m-0' />
            <table className='w-full'>
                <tbody className='text-base text-lite_content'>
                    <tr className='py-1'>
                        <td>Price </td>
                        <td className='text-end'>&#8377;{totalMrp}</td>
                    </tr>
                    <tr>
                        <td>Discount </td>
                        <td className='text-end'>- &#8377;{discount}</td>
                    </tr>
                    <tr>
                        <td>Delivery Charges </td>
                        <td className='text-end'>{deliveryCharges ==0 ? <span className='text-blue-400'><ins className='line-through text-gray-900'>&#8377;120</ins> Free</span>:<span>&#8377;{deliveryCharges}</span>}</td>
                    </tr>
                    <tr>
                        <td className='p-[5px]'> </td>
                    </tr>
                    <tr className='text-lg border-t-[1px] text-lite_content font-medium'>
                        <td className='py-2 '>Total Amount</td>
                        <td className='py-2 text-end'>&#8377;{totalAmount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartAmountFeed