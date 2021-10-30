import React from 'react';
import MainImageSlider from '../components/main-image-slider'
import FileUpload from '../components/fileupload';
import Service from '../components/service';
import Subscribe from '../components/subscribe';

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