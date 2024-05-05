import { useSelector } from 'react-redux'
import { selectUser } from '../../slices/UserSlice'
import { selectAllCartProducts, selectTotalMrp, selectTotalSellingPrice , selectCartIdAndNo } from '../../slices/CartSlice.js'

import ProductCard from '../../components/products/ProductCard'

const CartPage = () => {

    const cartProductsIdObject = useSelector(selectCartIdAndNo)

    const totalMrp = useSelector(selectTotalMrp)
    const totalSellingPrice = useSelector(selectTotalSellingPrice)
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
    <div>
        <div className='flex flex-wrap p-5 gap-5 justify-center'>
            {cartProductRender}
        </div>
        <div className='h-full flex flex-col items-end p-5 px-10 gap-3 border-t-2 border-gray-400'>
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