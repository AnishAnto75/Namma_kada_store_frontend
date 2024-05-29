import ProductCard from '../../components/products/ProductCard'
import { useSelector } from 'react-redux'
import { selectAllProduct } from '../../slices/ProductSlice'
import CategoryListFeed from '../../components/ProductCategories/CategoryListFeed'

const AllProducts = () => {
    
    const products = useSelector(selectAllProduct)

  return (
    <div  className='flex bg-gray'>
        <div className='md:min-w-72 max-w-72 bg-white ml-1 my-2 sticky top-2 h-96 hidden md:block'>
            <CategoryListFeed />
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 gap-y-4 m-2 bg-white p-1">
            {products?.map(product=> <ProductCard key={product._id} id={product._id} /> ) }
        </div>
    </div>
  )
}

export default AllProducts