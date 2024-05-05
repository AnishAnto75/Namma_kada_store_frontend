import { Link } from 'react-router-dom'
import AdminProductsList from '../../../components/Admin/Admin_products/AdminProductsList'

const AdminProductPage = () => {

  return (
    <div className='h-screen'>
    <div className='flex px-5 gap-5 py-2 border-b-2 border-b-amber-500'>
        <li className='list-none'>
            <Link to={'/admin/products/add-product'} className='btn bg-amber-400 text-white hover:bg-amber-500'>New product</Link>
        </li>
    </div>
    <div className='flex'>
        <AdminProductsList />
        <div className='hidden md:block'>
            <div className='w-full min-h-full flex items-center justify-center'>
                <span className='text-4xl px-20 text-slate-500 font-serif'>Select a Product to view details</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AdminProductPage