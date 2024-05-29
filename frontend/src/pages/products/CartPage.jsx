import { useSelector } from 'react-redux'
import { selectAllCartProducts  } from '../../slices/CartSlice.js'

import CartAmountFeed from '../../components/products/CartAmountFeed.jsx'
import { useNavigate } from 'react-router-dom'
import CartProductCard from '../../components/products/CartProductCard.jsx'

const CartPage = () => {

    const navigate = useNavigate()
    const cartProducts = useSelector(selectAllCartProducts)
    
    console.log('cart : ' , cartProducts)

    // no product in cart 
    if(!cartProducts?.length){
        return (
            <div className='h-screen p-4 -mb-56'>
                <div className='h-2/3 hero'>no products in cart</div>
            </div>
        )
    }
    const cartProductRender = cartProducts?.map((product => <CartProductCard key={product._id} product={product}/>)) 

    return (
        <div className='flex flex-col md:flex-row w-full items-center md:items-start justify-center p-1 md:p-5 gap-5 h-4/5'>
            
            <div className='md:w-3/5 w-full flex flex-col h-full'>
                <div className='h-10 flex hero justify-center text-2xl rounded-t-lg border border-second font-[arial] text-white bg-second z-50 sticky top-0 '>
                    My Cart
                </div>
                <div className='h-1 border-b-2 border-second '/>
                <div className='w-full px-2 pt-2 shadow-sm bg-gray '>
                    {cartProductRender}
                </div>
                <div className='bg-white w-full p-1 sticky bottom-0 border-y-2 border-second'>
                    <button
                        onClick={()=>navigate('/checkout')}
                        className='btn w-full bg-second text-white border-none hover:bg-second hover:translate-y-[1px]'>
                        Place Order
                    </button>
                </div>
            </div>

            <div className='container w-full md:w-1/4 p-5 shadow-md sticky top-2 rounded-md'>
                <CartAmountFeed />
            </div>
        </div>
    )
}

export default CartPage