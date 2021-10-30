import React from 'react';
import {useState }from 'react'
import Home from './layout/Home'
import  Header  from "./components/Header";
import Footer  from "./components/footer";

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
 <>
     <Header/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
