
import MainImageSlider from '../components/main-image-slider'
import Navbar from '../components/Navbar';
import FileUpload from '../components/fileupload';
import Service from '../components/service';
import Subscribe from '../components/subscribe';
import React from 'react'
const Home = () => {
    return ( 
   <>
 
     <MainImageSlider/>
     <Service/>
     <FileUpload/>
     <Subscribe/>
        </>
        
           
     );
}
 
export default Home;