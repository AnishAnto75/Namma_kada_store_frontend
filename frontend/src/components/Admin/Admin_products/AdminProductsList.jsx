import { useSelector } from 'react-redux'
import { selectAllProduct } from '../../../slices/ProductSlice'
import { useNavigate, useParams } from 'react-router-dom'

const AdminProductsList = () => {

    const {id} = useParams()

    const navigate = useNavigate()
    const products = useSelector(selectAllProduct)

    let content = <>Loading....</>

    if(products){
        content = (
            <div className='h-screen overflow-scroll overflow-x-hidden w-full md:w-96 '>
                <table className='border-2 border-amber-500 m-2'>
                    <thead>
                        <tr className='border-b-2 border-amber-500  '>
                            <th className='border-r-2 border-amber-500 p-3 w-full'>Product Name</th>
                            <th className='border-amber-500 px-5'>Mrp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>
                            <tr 
                                key={product._id} 
                                onClick={()=>navigate(`/admin/products/${product._id}`)}
                                className={`${id == product._id ? 'bg-amber-400 text-white hover:text-white cursor-default' : ' hover:text-amber-500 cursor-pointer'} h-full`}
                                >
                                <td className='border-r-2 border-amber-500 p-2 w-full'>{product.product_name}</td>
                                <td className='text-center'>{product.product_mrp}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

  return (
    <>
        {content}
    </>
  )
}

export default AdminProductsList