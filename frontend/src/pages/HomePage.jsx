import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='space-x-4 m-3'>
        <Link to={'/products'} className='btn bg-amber-400 text-white border-2 border-amber-500'>products</Link>
        <Link to={'/orders'} className='btn bg-amber-400 text-white border-2 border-amber-500'>Orders</Link>
        <Link to={'/products/cart'} className='btn bg-amber-400 text-white border-2 border-amber-500'>cart</Link>
        <Link to={'/admin'} className='btn bg-amber-400 text-white border-2 border-amber-500'>Admin</Link>
        <Link to={'/admin/products'} className='btn bg-amber-400 text-white border-2 border-amber-500'>Admin Products</Link>
    </div>
  )
}

export default HomePage