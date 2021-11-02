import React, { useState } from 'react';


const Customerdetails  = () => {
  let[customer,setCustomer]=useState({ })
  const handleoneuser= (n)=> {
    fetch(`https://hellouae.herokuapp.com/getuser/${n}`)
    .then(res=>res.json())
    .then(data=>setCustomer(...data.result))
    
 }
    return (  
        <div>
          <button onClick={()=>handleoneuser(5)}> fetch</button>
          <button onClick={()=>console.log(customer)}> get</button>
          <h1>Customer Details</h1>  
          <p>{"name :"+customer.Username}</p>
          <p>{"Email"+customer.Email}</p>
          <p>{"Phone"+customer.Phone}</p>
          <p>{"address"+customer.address}</p>
         <img src={`../../uploads/${customer.Personalimage}`}/>
          
        </div>
    );
}
 
export default Customerdetails;