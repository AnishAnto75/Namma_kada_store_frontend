import { useSelector } from "react-redux"
import { selectProductById } from "../../slices/ProductSlice"
import AddToCartButton from "./AddToCartButton"
import { Link } from "react-router-dom"

const ProductCard = ({id}) => {

    const product = useSelector(state => selectProductById(state , id))
    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${product?.product_photos}`

    const percentage = Math.round(((product?.product_mrp - product?.product_price ) / product?.product_mrp ) *100)

  return (
    <div className="h-44 w-full rounded-sm md:h-[313px] col-span-1 hover:shadow border-b border-gray">
        <div className="h-44  md:h-36 md:pt-2">
            <Link to={`/products/${id}`}>
                <img className="rounded-t-lg h-full w-full object-contain bg-first" src={PRODUCT_IMAGE_URL} alt={product?.product_name} />
            </Link>
        </div>
        <div className="w-full flex flex-col p-2 px-3  h-40 relative bg-first">
            <div className="text-[14px] text-lite_content font-medium font-[cursive] line-clamp-1">{product?.product_brand}</div>
            <div className="md:line-clamp-2 font-[arial] text-[15px] text-content">{product?.product_name}</div>
            <div className='absolute pl-0.5 w-full bottom-14 '>
                <span className='text-lg pr-2 font-[arial]'>&#x20B9;{product?.product_price}</span>
                <span className='line-through text-base text-lite_content'>&#x20B9;{product?.product_mrp}</span>
                <span className='pl-2 text-base font-[arial] text-dark_third tracking-wide'>{`${percentage ? `${percentage}%off` : ''}`}</span>
            </div>
            <div className="absolute bottom-2 left-0 px-2 w-full flex gap-1 ">
                <div className="w-full border border-dark_gray hero rounded text-content font-[arial]">{product?.product_quantity}</div>
                <AddToCartButton product_id = {id} />    
            </div>
        </div>
    </div>
  )
}

export default ProductCard
