import React from 'react';
import {useState }from 'react'
import {Switch,Route} from 'react-router-dom'



import Layout from './components/layout';
import Home from './layout/Home'
import AboutPage from './layout/about'
import Contact from './layout/contact'
import Customerdetails from './layout/custmerdetails';
import Rent from './layout/rent';
import News from './layout/news';
import Delivery from './layout/delivery';
import Service from './layout/services';


function App() {
  const [backenddata, setBackenddata] = useState([]);

  
  function fetchData() {
     
     fetch(`http://localhost:4000/getAlluser`)
     .then(res=>res.json())
     .then(data=>setBackenddata(data.result))
     console.log(backenddata)
  }
  const handleoneuser= (n)=> {
   
     fetch(`http://localhost:4000/getuser/${n}`)
     .then(res=>res.json())
     .then(data=>console.log(data.result))
     
  }
const handleClick = ()=>{
  fetchData();

}

  return (
    <Layout>
 <Switch>
   <Route path="/" exact component={Home}/>
   <Route path="/Aboutus" exact component={AboutPage}/>
   <Route path="/Contact"  component={Contact}/>
   <Route path="/customerDetails"  component={Customerdetails}/>
   <Route path="/News"  component={News}/>
   <Route path="/Delivery"  component={Delivery}/>
   <Route path="/Rent"  component={Rent}/>
   <Route path="/Services"  component={Service}/>
  
    </Switch>
    </Layout>
  );
}

export default App;
