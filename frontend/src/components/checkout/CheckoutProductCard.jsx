import { useDispatch, useSelector } from "react-redux"
import { addToCart , selectUserIds } from "../../slices/UserSlice"
import { useEffect, useState } from "react"

const CheckoutProductCard = ({product}) => {
    
    const dispatch = useDispatch()
    
    const user_id = useSelector(selectUserIds)[0]
    const totalMrpOfProduct = product.product_id.product_mrp * product.no_of_product 
    const totalPriceOfProduct = product.product_id.product_price * product.no_of_product 
    
    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${product?.product_id.product_photos}`
    const percentage = Math.round(((totalMrpOfProduct - totalPriceOfProduct ) / totalMrpOfProduct ) *100)

    const remove = ()=>{
        const cartData = {user_id , product_id : product.product_id._id, no_of_product : 0 }
        dispatch(addToCart(cartData))
    }

  return (
    <div className="rounded-lg h-[180px] shadow-md w-full bg-white ">
        <div className="flex h-full">
            <div className="h-[180px] w-36 min-w-36">
                <img className="rounded-t-lg h-36 w-full object-contain pt-1 " src={PRODUCT_IMAGE_URL} alt={product?.product_name} />
                <div className="h-7 mt-1 ">
                    <span className="justify-center flex">
                        <span className="bg-lite_content text-white px-[6px] rounded-lg">{product.no_of_product}</span><span>&nbsp;products</span>
                    </span> 
                </div>
            </div>
            <div className="px-1 py-2 w-full h-full flex-col relative">
                <div className="h-5 text-lite_content font-medium font-[cursive] text-[14px]">{product?.product_id.product_brand}</div>
                <div className="md:line-clamp-1 font-[arial] text-[16px] text-content">{product?.product_id.product_name}</div>
                <div className="h-5 text-lite_content text-[13px] font-[cursive]">{product?.product_id.product_quantity}</div>
                <div className='p-1 space-x-2 mt-2 '>
                    <span className="line-through text-lite_content">&#x20B9;{totalMrpOfProduct}</span>
                    <span className="text-lg font-[arial]">&#x20B9;{totalPriceOfProduct}</span>
                    <span className="font-[cursive] text-[15px] text-third pl-1">{percentage}%off</span>
                </div>
                <div className="absolute bottom-4 space-x-2">
                    <button 
                        onClick={()=>remove()}
                        className="px-2 py-2 text-white bg-second shadow rounded-lg hover:grayscale"
                        >Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProductCard
