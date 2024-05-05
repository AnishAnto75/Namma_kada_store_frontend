import { useSelector } from 'react-redux'
import { selectUser } from '../../slices/UserSlice'
import { selectAllCartProducts, selectTotalMrp, selectTotalSellingPrice , selectCartIdAndNo, selectTotalNoOfProduts } from '../../slices/CartSlice.js'

import ProductCard from '../../components/products/ProductCard'

const CartPage = () => {

    const cartProductsIdObject = useSelector(selectCartIdAndNo)

    const totalMrp = useSelector(selectTotalMrp)
    const totalSellingPrice = useSelector(selectTotalSellingPrice)
    const totalNoOfProduct = useSelector(selectTotalNoOfProduts)

    const cartProducts = useSelector(selectAllCartProducts)

    // cart product card render
    
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
        <div className='flex m-5 gap-5'>
            <div className='container md:w-2/3 w-full bg-white '>
                <div className='h-10 flex hero justify-center border-2 border-amber-500 text-2xl shadow-lg font-[arial] text-amber-600'>
                    Cart
                </div>
                <div className='h-1'/>
                <div className='flex flex-wrap p-5 gap-5 justify-center border-2 border-amber-500'>
                    {cartProductRender}
                </div>
            </div>

            <div className='h-full flex flex-col items-end p-5 px-10 bg-green-200 border-2 border-amber-500'>
                <span className='flex flex-col '>
                    <li className='list-none'>
                    total mrp : {totalMrp}
                    </li>
                    <li className='list-none'>
                    price : {totalSellingPrice}
                    </li>
                </span>
            </div>
        </div>
    )
}

export default CartPage