import React from 'react'
import { Outlet } from 'react-router-dom'

import AdminHeader from '../components/Admin/Admin_header/AdminHeader.jsx'

const MainLayout = () => {
  return (
    <div>
        <div>
        <AdminHeader />
        </div>

        <Outlet />
    </div>
  )
}

export default MainLayout