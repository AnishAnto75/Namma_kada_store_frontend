import { useDispatch, useSelector } from "react-redux"
import { selectProductById } from "../../slices/ProductSlice"
import { addToCart , selectUserIds } from "../../slices/UserSlice"
import { useEffect, useState } from "react"
import { selectCartProductById, selectTotalMrpOfProduct, selectTotalPriceOfProduct } from "../../slices/CartSlice"

const CheckoutProductCard = ({id}) => {
    
    const dispatch = useDispatch()
    
    const [no_of_product , set_no_of_product] = useState(0)
    
    const product = useSelector(state => selectProductById(state , id))
    const user_id = useSelector(selectUserIds)[0]
    const data = useSelector(state => selectCartProductById(state , id))
    const totalMrpOfProduct = useSelector(state => selectTotalMrpOfProduct(state , id))
    const totalPriceOfProduct = useSelector(state => selectTotalPriceOfProduct(state , id))
    
    useEffect(()=>{
        if(data){
            set_no_of_product(data.no_of_product)
        }
    },[data])
    
    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${product?.product_photos}`
    const percentage = Math.round(((totalMrpOfProduct - totalPriceOfProduct ) / totalMrpOfProduct ) *100)

    const remove = ()=>{
        const cartData = {user_id , product_id : id , no_of_product : 0 }
        dispatch(addToCart(cartData))
    }

  return (
    <div className="rounded-lg shadow-sm h-48 border w-full bg-white ">
        <div className="flex">
            <div className="h-40 w-36 min-w-36">
                <img className="rounded-t-lg h-full w-full object-contain" src={PRODUCT_IMAGE_URL} alt={product?.product_name} />
                <div className='h-7 rounded p-[1px] font-[arial] text-center'>
                    <span className="rounded-md px-1.5 bg-gray-600 text-white font-mono">{no_of_product}</span> product
                </div>     
            </div>
            <div className="px-1 py-2 w-full flex-col mt-3 space-y-1">
                <div className="h-5 px-1 font-medium text-gray-500 text-[14px]">{product?.product_brand}</div>
                <div className="md:h-6 h-6 px-1 font-[arial] text-gray-800 line-clamp-1 md:text-[15px] w-full">{product?.product_name}</div>
                <div className="h-5 px-1 text-gray-500 text-[14px]">{product?.product_quantity}</div>
                <div className='p-1 space-x-2 mt-2 font-[arial]'>
                    <span className='line-through text-base font-mono text-gray-700'>MRP:{totalMrpOfProduct}</span>
                    <span className='text-lg font-sans font-[500] text-gray-800'>&#x20B9;{totalPriceOfProduct}</span>
                    <span className='text-xl font-[700] text-amber-400 '>{percentage}%</span>
                </div>
                <div>
                    <button 
                        onClick={()=>remove()}
                        className="px-2 py-1 bg-rose-600 m-1 text-white rounded-lg"
                        >Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProductCard
