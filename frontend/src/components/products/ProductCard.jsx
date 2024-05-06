import { useSelector } from "react-redux"
import { selectProductById } from "../../slices/ProductSlice"
import AddToCartButton from "./AddToCartButton"
import { Link } from "react-router-dom"

const ProductCard = ({id }) => {

    const product = useSelector(state => selectProductById(state , id))
    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${product?.product_photos}`

  return (
    <div className="rounded-lg shadow-lg h-44 w-full md:h-72 md:w-56 bg-white ">
        <div className="flex md:block">
            <div className="h-44 w-36 md:h-36 min-w-36 md:min-w-full md:border-r-0">
                <Link to={`/products/${id}`}>
                    <img className="rounded-t-lg h-full w-full object-contain" src={PRODUCT_IMAGE_URL} alt={product?.product_name} />
                </Link>
            </div>
            <div className="px-1 py-2 w-full flex-col space-y-3 md:p-2 md:space-y-0 ">
                <div className="h-14 md:h-12 px-1 font-[arial] overflow-auto text-[15px] ">{product?.product_name}</div>
                <div className='p-1 space-x-2'>
                    <span className='line-through text-xs font-[arial]'>MRP:{product?.product_mrp}</span>
                    <span className=' font-[arial] text-base'>&#x20B9;{product?.product_price}</span>
                </div>
                <div className="px-2 md:px-1">
                    <AddToCartButton product_id = {id} />    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard

// const mrp = product?.product_mrp
// const price = product?.product_price
// const discount = mrp-price
// const product_discount = Math.round((discount/mrp)*100)