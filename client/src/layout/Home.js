import React from 'react';
import MainImageSlider from '../components/main-image-slider'
import FileUpload from '../components/fileupload';
import Service from '../components/service';
import Subscribe from '../components/subscribe';
import Layout from '../components/layout'
const Home = () => {
    return ( 
   <>
 <Layout>

     <MainImageSlider/>
     <Service/>
     <FileUpload/>
     <Subscribe/>
     
     </Layout>
        </>
        
           
     );
}
 
export default Home;