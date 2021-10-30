
import FileUpload from "./components/fileupload";
import {useEffect,useState }from 'react'
import Layout from './components/layout'
import axios from 'axios';
import Home from './layout/Home'

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
   
  
    <Home/>
  
      
    </Layout>
  );
}

export default App;
