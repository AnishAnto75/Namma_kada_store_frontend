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
            // <div className='h-screen p-4 -mb-56'>
            //     <div className='h-2/3 hero'>no products in cart</div>
            // </div>
            <div className='p-3 pl-1 w-full h-screen mb-10'> 
            <div className='bg-white h-full flex justify-center flex-col border-2 border-dark_gray rounded'>
                <div className='text-center text-xl font-roboto tracking-wide text-lite_content'>No products added to the cart yet  </div>
                <div className='text-center mt-2'>
                    <button onClick={()=>navigate('/products?groups=staples&category=all')} className='text-third underline text-lg font-roboto tracking-wide p-2 rounded'>Add items</button>
                </div>
            </div>
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