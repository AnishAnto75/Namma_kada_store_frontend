import React from 'react'
import { useSelector } from 'react-redux'
import { selectTotalNoOfProduts, selectTotalSellingPrice } from '../../slices/CartSlice.js'
import { Link } from 'react-router-dom'

import { IoMdCart } from "react-icons/io";

const CartButton = () => {
    const totalNoOfProduct = useSelector(selectTotalNoOfProduts)
    const totalSellingPrice = useSelector(selectTotalSellingPrice)

    return (
        <div className="flex-none">
            <div className="dropdown dropdown-end dropdown-hover">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <IoMdCart className='h-6 w-6' />
                        <span className="badge badge-sm indicator-item">{totalNoOfProduct}</span>
                    </div>
                </div>
                <div tabIndex="0" className="z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                        <span className="font-bold text-lg">{totalNoOfProduct} Items</span>
                        <span className="text-info">Subtotal : &#8377; {totalSellingPrice}</span>
                        <div className="card-actions">

                            <Link to={'/products/cart'} className="btn bg-amber-500 btn-block text-white hover:bg-amber-600">View cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartButton