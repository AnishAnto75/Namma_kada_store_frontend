import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
  return (
    <div>
        <Link to={'/admin/orders'}>
            <button className='btn'>Orders</button>
        </Link>
        <Link to={'/admin/products'}>
            <button className='btn'>Products</button>
        </Link>
        
    </div>
  )
}

export default AdminHomePage