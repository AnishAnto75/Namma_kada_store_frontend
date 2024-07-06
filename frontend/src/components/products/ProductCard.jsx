import { useSelector } from "react-redux"
import { selectProductById } from "../../slices/ProductSlice"
import AddToCartButton from "./AddToCartButton"
import { Link } from "react-router-dom"

const ProductCard = ({id}) => {

    const product = useSelector(state => selectProductById(state , id))
    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${product?.product_photos}`

    const percentage = Math.round(((product?.product_mrp - product?.product_price ) / product?.product_mrp ) *100)

  return (
    <div className="h-44 w-full md:h-[290px] col-span-1 border-b border-gray hover:shadow-md transition-all duration-300 transform">
        <div className="h-32">
            <Link to={`/products/${id}`}>
                <img className="rounded-t-lg p-1 h-full w-full object-contain bg-first" src={PRODUCT_IMAGE_URL} alt={product?.product_name} />
            </Link>
        </div>
        <div className="w-full flex flex-col p-2 px-3 h-40 relative bg-secon">
            <div className="text-[13px] text-lite_content font-medium font-[cursive] line-clamp-1">{product?.product_brand}</div>
            <div className="line-clamp-2 font-[arial] text-[14px] text-content">{product?.product_name}</div>
            <div className='absolute pl-0.5 w-full bottom-14 '>
                <span className='text-[17px] pr-2 text-content font-[arial]'>&#x20B9;{product?.product_price}</span>
                <span className='line-through text-[15px] text-lite_content'>&#x20B9;{product?.product_mrp}</span>
                <span className='pl-2 text-[15px] font-[arial] text-dark_third tracking-wide'>{`${percentage ? `${percentage}%off` : ''}`}</span>
            </div>
            <div className="absolute bottom-2 left-0 px-2 w-full flex gap-1 ">
                <div className="border border-dark_gray hero rounded-sm text-sm bg-white tracking-wide text-content font-[arial]">{product?.product_quantity}</div>
                <AddToCartButton product_id = {id} />    
            </div>
        </div>
    </div>
  )
}

export default ProductCard
