import ProductCard from '../../components/products/ProductCard'
import { useSelector } from 'react-redux'
import CategoryListFeed from '../../components/ProductCategories/CategoryListFeed'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { selectGroupCategory } from '../../slices/GroupCategorySlice'
import axios from 'axios'
import toast from 'react-hot-toast'

const AllProducts = () => {

    const PRODUCT_URL = import.meta.env.VITE_PRODUCT_URL

    const navigate = useNavigate()

    const [products , setProducts] = useState(null)
    const [loading , setLoading] = useState(false)

    const location = useLocation()
    const groupCategory = useSelector(selectGroupCategory)

    const urlParams = new URLSearchParams(location.search)

    const groupsFromUrl = urlParams.get('groups')
    const categoryFromUrl = urlParams.get('category')

    const getGroupCategoryProduct = async(group , category)=>{
        try {
            setLoading(true)
            const res = await axios.get(`${PRODUCT_URL}/group/q?group=${group}&category=${category}`)
            setProducts(res.data.data)
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(groupsFromUrl && categoryFromUrl){
            getGroupCategoryProduct(groupsFromUrl , categoryFromUrl)
        }
    },[location.search])

    const validCategory = groupCategory

  return (
    <div  className='flex bg-lite_blue min-h-screen'>
        <div className='md:min-w-64 w-64 max-w-64 bg-white m-3 mx-2 sticky top-10 hidden md:block shadow rounded-md overflow-auto h-screen p-1'>
            <CategoryListFeed urlCategory={categoryFromUrl} urlGroup={groupsFromUrl}/>
        </div>

        {!validCategory[groupsFromUrl]?.includes(categoryFromUrl)  ?
            <div className='p-3 pl-1 w-full h-screen'> 
                <div className='bg-white h-full flex justify-center flex-col'>
                    <div className='text-center text-xl font-roboto'>Something went wrong!</div>
                    <div className='text-center mt-2'>
                        <button onClick={()=>navigate('/products?groups=staples&category=all')} className='bg-third text-white p-2 rounded hover:bg-dark_third'>refresh</button>
                    </div>
                </div>
            </div>
        :
        loading ? 
            <div className='w-full hero m-3 ml-1 bg-white shadow rounded'>
                <div className='loading loading-spinner text-third h-10 w-10'></div>
            </div>
        :
        products?.length?
            <div className='m-3 ml-1 w-full bg-white shadow rounded'>
                <div className='border-b-2 m-2 border-gray pb-1'>
                    <div className='text-lite_content text-xl'>{groupsFromUrl.replace('_' , ' ')}</div>
                    <div className='px-4 text-lite_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit nisi explicabo necessitatibus aspernatur ipsum aut officia aperiam sit porro praesentium laboriosam vel commodi quod, error, doloribus quia excepturi eos!</div>
                </div>
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-1 gap-y-5">
                    {products?.map(product=> <ProductCard key={product._id} id={product._id} /> ) }
                </div>
            </div>
        :
            <div className='hero text-xl font-roboto col-span-10 m-3 ml-1 bg-white shadow rounded'>no products found</div>   
        }
    </div>
    )
}

export default AllProducts