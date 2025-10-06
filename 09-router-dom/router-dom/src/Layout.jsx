import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Header/>

        {/* jo yaha outlet hai -> yaha chize change kr skte ho , header or footer same rahega - uske andar ke chize change hoti rahegi */}
        <Outlet/>
        
        <Footer/>
    </div>
  )
}

export default Layout