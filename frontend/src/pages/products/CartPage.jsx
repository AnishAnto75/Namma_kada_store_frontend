import { useSelector } from 'react-redux'
import { selectCartIdAndNo } from '../../slices/CartSlice.js'

import ProductCard from '../../components/products/ProductCard'
import CartAmountFeed from '../../components/products/CartAmountFeed.jsx'

const CartPage = () => {

    const cartProductsIdObject = useSelector(selectCartIdAndNo)
    
    // no product in cart 
    if(!cartProductsIdObject?.length){
        return (
            <div className='h-screen p-4 -mb-56'>
                <div className='h-2/3 hero'>no products in cart</div>
            </div>
        )
    }
    const cartProductRender = cartProductsIdObject?.map((product => <ProductCard key={product.product_id} id={product.product_id}/>)) 

    return (
        <div className='flex flex-col md:flex-row w-full items-center md:items-start justify-center p-1 md:p-5 gap-5 '>
            <div className='md:w-3/5 w-full flex flex-col'>

                <div className='h-10 flex hero justify-center text-2xl shadow-md font-[arial] text-gray-600 bg-white sticky top-0 '>
                    My Cart
                </div>
                <div className='h-1'/>
                <div className='flex flex-wrap p-1 w-full gap-1 justify-center h-3/5 shadow-md overflow-auto'>
                    {cartProductRender}
                </div>
                <div className='bg-white w-full p-1 sticky bottom-0 shadow-md '>
                    <button className='btn w-full bg-amber-400 hover:bg-amber-500 text-white border-none'>Place Order</button>
                </div>
            </div>

            <div className='container w-full md:w-1/4 p-5 shadow-md sticky top-2 rounded-md'>
                <CartAmountFeed />
            </div>
        </div>
    )
}

export default CartPage