import React from 'react'
import Headersec from './header'
import Footer from './footer'



const Layout =  ({children})=>{
    return (
        <>
        <Headersec/>
       {children}
        <Footer/>
        </>
    )
}
export default Layout;