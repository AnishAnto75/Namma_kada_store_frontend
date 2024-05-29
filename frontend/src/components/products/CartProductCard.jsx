import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { addToCart, selectUserIds } from "../../slices/UserSlice"
import toast from "react-hot-toast"

const CartProductCard = ({product}) => {

    const dispatch = useDispatch()
    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${product?.product_photos}`
    const user_id = useSelector(selectUserIds)[0]

    const [no_of_product , set_no_of_product] = useState(0)
    const handleRef = useRef(true)

    useEffect(()=>{
        if(product){
            set_no_of_product(product.no_of_product)
        }
    },[product])

    const totalMrpOfProduct = product?.no_of_product * product?.product_mrp
    const totalSellingPriceOfProduct = product?.no_of_product * product?.product_price

    const remove = ()=>{
        if(handleRef.current){
            const cartData = {user_id , product_id : product._id , no_of_product : 0 }
            dispatch(addToCart(cartData))
            handleRef.current=false
        }
    }
    const addToWishlist = () =>{
        toast.error('wishlist not created yet')
    }

    const updateCart = (e)=>{
        e.preventDefault()
        const cartData = {user_id , product_id : product._id, no_of_product : Number(no_of_product)}
        dispatch(addToCart(cartData))
    }
    const reduceProduct = ()=>{
        const cartData = {user_id , product_id : product._id, no_of_product : product.no_of_product-1 }
        dispatch(addToCart(cartData))
    }
    const increaseProduct = async()=>{
        const cartData = {user_id , product_id : product._id , no_of_product : product.no_of_product+1 }
        dispatch(addToCart(cartData))
    }

    const percentage = Math.round(((totalMrpOfProduct - totalSellingPriceOfProduct ) / totalMrpOfProduct ) *100)
  return (
    <div className="rounded-lg h-48 shadow-md w-full bg-white mb-2">
        <div className="flex h-full">
            <div className="h-48 w-36 min-w-36">
                <img className="rounded-t-lg h-36 w-full object-contain pt-1 " src={PRODUCT_IMAGE_URL} alt={product?.product_name} />
                <div className="flex justify-between h-10 rounded-xl px-1">
                    <button
                        onClick={()=> reduceProduct()}
                        className="w-20 rounded-s-xl bg-second text-white hover:border-y-2 border-black hover:text-black " 
                    >-
                    </button>
                    <form 
                        onSubmit={(e)=> updateCart(e)}
                        className='w-full h-10 border-y-2 hero border-second bg-second '>
                        <input 
                            value={no_of_product}
                            onChange={(e)=>set_no_of_product(e.target.value)} 
                            className='h-[33px] w-full text-center hide-arrow outline-none bg-white rounded-md' />
                    </form>
                    <button
                        onClick={()=> increaseProduct()}
                        className="w-20 rounded-e-xl bg-second text-white hover:border-y-2 border-y-black hover:text-black" 
                        >
                        +
                    </button>
                </div>
            </div>
            <div className="px-1 py-2 w-full h-full flex-col relative">
                <div className="h-5 text-lite_content font-medium font-[cursive] text-[14px]">{product?.product_brand}</div>
                <div className="md:line-clamp-1 font-[arial] text-[16px] text-content">{product?.product_name}</div>
                <div className="h-5 text-lite_content text-[13px] font-[cursive]">{product?.product_quantity}</div>
                <div className='p-1 space-x-2 mt-2 '>
                    <span className="line-through text-lite_content">&#x20B9;{totalMrpOfProduct}</span>
                    <span className="text-lg font-[arial]">&#x20B9;{totalSellingPriceOfProduct}</span>
                    <span className="font-[cursive] text-[15px] text-third pl-1">{percentage}%off</span>
                </div>
                <div className="absolute bottom-4 space-x-2">
                    <button 
                        onClick={()=>remove()}
                        className="px-2 py-2 text-white bg-second shadow rounded-lg hover:grayscale"
                        >Remove
                    </button>
                    <button 
                        onClick={()=>addToWishlist()}
                        className="px-2 py-2 text-white bg-third shadow rounded-lg hover:grayscale"
                        >Add to wishlist
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartProductCard
