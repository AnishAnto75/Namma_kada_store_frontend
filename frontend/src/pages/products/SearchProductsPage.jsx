import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'

import ProductCard from '../../components/products/ProductCard'

const SearchProductsPage = () => {

    const location = useLocation()
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    const [searchTerm , setSearchTerm] = useState(null)
    const [products , setProducts] = useState(null)
    const [loading , setLoading] = useState(true)

    const urlParams = new URLSearchParams(location.search)
    const search = urlParams.get("searchTerm")

    useEffect(()=>{
        setLoading(true)
        if(search){
            setSearchTerm(search)
        }
        try {
            if(searchTerm && searchTerm == search){
                const fetchSearchedProducts = async()=>{
                    try {
                        const res = await axios.get(`${BACKEND_URL}api/product/search/q?searchTerm=${searchTerm}`)
                        if(res.data){
                            console.log('data : ' , res.data)
                            toast.success(res.data.message)
                            setProducts(res.data.data)
                        }
                    } catch (error) {
                        toast.error(error.message)
                        console.log(error)
                    }
                }
                fetchSearchedProducts()
            }
        } finally{
            setLoading(false)
        }
    },[search , searchTerm ])

    if(loading){
        return <div>loading..</div>
    }
    if(!products?.length){
        return <div>no products found</div>
    }

  return (
    <>
        <div className='flex flex-wrap gap-2 p-2 md:justify-between '>
            {products?.map(product=> 
                <ProductCard key={product._id} id={product._id}/>
            )}
        </div>
    </>
    )
}

export default SearchProductsPage
