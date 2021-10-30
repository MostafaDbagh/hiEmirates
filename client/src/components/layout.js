import React from 'react'

import {
    BrowserRouter as Router,
} from 'react-router-dom'
import Header from './Header'
import Footer from './footer'

export default ({children})=>{
    return (
        <Router>
            <Header/>
            
            {children}
            <Footer />
        </Router>
    )
}