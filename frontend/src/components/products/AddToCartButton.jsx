import { useEffect, useState } from 'react'
import { addToCart , selectUserIds } from '../../slices/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import {useAuth0} from '@auth0/auth0-react'
import { selectCartProductById } from '../../slices/CartSlice'

const AddToCartButton = ({product_id}) => {

    const dispatch = useDispatch()
    const user_id = useSelector(selectUserIds)[0]
    const data = useSelector(state => selectCartProductById(state , product_id))
    const { loginWithRedirect } = useAuth0()

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
    <>
        {data?
        <div className="flex justify-between rounded-xl border-2 border-gray-300">
            <button
                onClick={()=>reduceProduct()}
                className=" w-20 h-11 rounded-s-xl bg-amber-500 text-white hover:bg-amber-600 border-2 boder-black" 
            >-
            </button>
            <form onSubmit={(e)=>updateCart(e)} className='w-full h-11'>
                <input 
                    type="number" 
                    value={no_of_product}
                    onChange={(e)=>set_no_of_product(e.target.value)} 
                    className='h-full w-full text-center hide-arrow border-y-2' />
            </form>
            <button
                onClick={()=>increaseProduct()}
                className="w-20 h-11 rounded-e-xl bg-amber-500 text-white hover:bg-amber-600 border-2 border-lack" 
                >
                +
            </button>
        </div>
        :
        user_id? 
            <div 
                onClick={()=>add_to_cart()}
                className='h-11 w-full bg-amber-500 rounded-lg shadow-md hero text-white hover:bg-amber-600 cursor-pointer'>
                Add to cart
            </div>
        :
        <>
            <button 
                onClick={()=>document.getElementById('my_modal_3').showModal()}
                className='h-11 w-full bg-amber-500 rounded-lg shadow-md hero text-white hover:bg-amber-600 cursor-pointer'
            >Add to Cart</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box h-40">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Log in</h3>
                    <p className="py-4">Login to add the product to cart </p>
                    <button 
                        onClick={()=>loginWithRedirect()}
                        className='absolute btn bottom-3 right-3 bg-amber-400 text-white hover:bg-amber-500 '
                        >Login
                    </button>
                </div>
            </dialog>
        </>
        }
    </>
  )
}

export default AddToCartButton