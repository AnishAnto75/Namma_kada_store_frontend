import React from 'react'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import NavCategoriesFeed from '../components/ProductCategories/NavCategoriesFeed.jsx'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <NavCategoriesFeed/>

        <Outlet />

        {/* <Footer /> */}
    </div>

  )
}

export default MainLayout