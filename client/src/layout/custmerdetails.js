import React, { useState } from 'react';


const Customerdetails  = () => {
  let[customer,setCustomer]=useState({
    Username:"",
    Email:"",
    Phone:"",
    address:"",
    Bpassport:"",
    Fpassport:"",
    Personalimage:""
  })
  const handleoneuser= (n)=> {
    fetch(`https://hellouae.herokuapp.com/getuser/${n}`)
    .then(res=>res.json())
    .then(data=>setCustomer(data.result))
    
 }

    return (  
        <div>
          <button onClick={()=>handleoneuser(5)}> fetch</button>
          <button onClick={()=>console.log(customer)}> fetch</button>
          <h1>Customer Details</h1>  
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          
        </div>
    );
}
 
export default Customerdetails;