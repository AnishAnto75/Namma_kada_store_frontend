import { useEffect, useState } from 'react'
import { addToCart, getCartProductById, selectUserIds } from '../../slices/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

const AddToCartButton = ({product_id}) => {

    const dispatch = useDispatch()
    const user_id = useSelector(selectUserIds)[0]
    const data = useSelector(state => getCartProductById(state , product_id))

    const [no_of_product , set_no_of_product] = useState(0)

    useEffect(()=>{
        if(data){
            set_no_of_product(data.no_of_product)
        }
    },[data])
    
    const add_to_cart = ()=>{
        const cartData = {user_id , product_id , no_of_product : 1 }
        dispatch(addToCart(cartData))
    }
    const updateCart = (e)=>{
        e.preventDefault()
        const cartData = {user_id , product_id , no_of_product : Number(no_of_product)}
        dispatch(addToCart(cartData))
    }
    const reduceProduct = ()=>{
        const cartData = {user_id , product_id , no_of_product : data.no_of_product-1 }
        dispatch(addToCart(cartData))
    }
    const increaseProduct = async()=>{
        const cartData = {user_id , product_id , no_of_product : data.no_of_product+1 }
        dispatch(addToCart(cartData))
    }

  return (
    <div>
        {data?
        <div className="flex justify-between shadow-lg rounded-xl border-2 border-gray-300">
            <button
                onClick={()=>reduceProduct()}
                className=" w-20 h-11 rounded-s-xl bg-amber-500 text-white hover:bg-amber-600 border-2 boder-black" 
                >
                -
            </button>
            <form onSubmit={(e)=>updateCart(e)} className='w-full h-11'>
                <input 
                    type="number" 
                    value={no_of_product}
                    onChange={(e)=>set_no_of_product(e.target.value)} 
                    className='h-full w-full text-center hide-arrow border-y-2 ' />
            </form>
            <button
                onClick={()=>increaseProduct()}
                className="w-20 h-11 rounded-e-xl bg-amber-500 text-white hover:bg-amber-600 border-2 border-lack" 
                >
                +
            </button>
        </div>
        :
        <div 
            onClick={()=>add_to_cart()}
            className='h-11 w-full bg-amber-500 rounded-lg shadow-md hero text-white hover:bg-amber-600'>
            Add to cart
        </div>
        }
    </div>
  )
}

export default AddToCartButton