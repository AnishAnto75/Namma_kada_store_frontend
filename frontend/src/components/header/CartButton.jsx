import React from 'react'
import { useSelector } from 'react-redux'
import { selectTotalNoOfProduts, selectTotalSellingPrice } from '../../slices/CartSlice.js'

import { IoMdCart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const CartButton = () => {

    const navitage = useNavigate()
    const totalNoOfProduct = useSelector(selectTotalNoOfProduts)
    const totalSellingPrice = useSelector(selectTotalSellingPrice)

    const location = new URLSearchParams(window.location.pathname)

    return (
        <div className="flex">
            <div className="dropdown dropdown-end dropdown-hover">
                <div tabIndex="0" role="button" className="btn btn-ghost hover:bg-transparent hover:shadow-inner hover:shadow-second flex ">
                    <div className="indicator">
                        <IoMdCart className='h-6 w-6 text-second' />
                        <span className="badge badge-xs py-2 right-1 indicator-item bg-first shadow-inner shadow-second text-second">{totalNoOfProduct}</span>
                    </div>
                    <div className='text-base text-second font-roboto'>Cart</div>
                </div>
                <div tabIndex="0" className="z-[1] card card-compact dropdown-content w-52 bg-first shadow">
                    <div className="card-body">
                        <span className="font-black font-[cursive] text-lg ">{totalNoOfProduct} Items</span>
                        <span className="text-second italic font-medium">Subtotal : &#8377; {totalSellingPrice}</span>
                        <div className="card-actions">
                            <button 
                                disabled={location.toString() === "%2Fcart="}
                                onClick={()=>navitage('/cart') }
                                className="btn w-full text-white bg-second hover:bg-second hover:shadow-md"
                                >
                                View cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartButton