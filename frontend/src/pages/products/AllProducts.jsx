import ProductCard from '../../components/products/ProductCard'
import { useSelector } from 'react-redux'
import { selectAllProduct } from '../../slices/ProductSlice'

const AllProducts = () => {
    
    const products = useSelector(selectAllProduct)

  return (
   <div className="flex flex-col md:flex-wrap md:flex-row justify-between p-2 gap-2 md:p-5 md:gap-5 w-full ">
        {products?.map(product=> <ProductCard key={product._id} id={product._id} /> ) }
    </div>
  )
}

export default AllProducts