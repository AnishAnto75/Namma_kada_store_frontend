import React from 'react'
import { selectCartDeliveryCharges, selectCartDiscount, selectCartTotalAmount, selectTotalMrp, selectTotalSellingPrice } from '../../slices/CartSlice'
import { useSelector } from 'react-redux'

const CartAmountFeed = () => {
    const totalMrp = useSelector(selectTotalMrp)
    const totalSellingPrice = useSelector(selectTotalSellingPrice)
    const discount = useSelector(selectCartDiscount)
    const deliveryCharges = useSelector(selectCartDeliveryCharges)
    const totalAmount = useSelector(selectCartTotalAmount)

    return (
        <div className='text-start'>
            <div className='text-xl text-gray-600'>
                Price Details
            </div>
            <div className='divider m-0' />
            <table className='w-full'>
                <tbody className='text-base text-gray-700'>
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
                    <tr className='text-lg font-medium border-y-[1px]'>
                        <td className='py-2 '>Total Amount</td>
                        <td className='py-2 text-end'>&#8377;{totalAmount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartAmountFeed