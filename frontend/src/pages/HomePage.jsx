import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <>
    <div className='p-2 flex'>
        <img src="/logo1.jpeg" alt="" className='w-full h-screen object-contain' />
    </div>
    <div className='space-x-4 p-3'>
        <Link to={'/admin'} className='btn'>Admin</Link>
        <Link to={'/admin/products'} className='btn bg-amber-400 text-white border-2 border-amber-500'>Admin Products</Link>
    </div>
    </>
  )
}

export default HomePage