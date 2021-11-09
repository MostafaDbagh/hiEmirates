import React, { useState } from 'react';
const Customerdetails  = () => {
  let[customer,setCustomer]=useState({ })
  const handleoneuser= (n)=> {
    fetch(`http://localhost:4000/getuser/${n}`)
    .then(res=>res.json())
    .then(data=>setCustomer(...data.result))
    
 }
    return (  
        <div>
          <button onClick={()=>handleoneuser(16)}> fetch</button>
          <button onClick={()=>console.log(customer)}> get</button>
          <h1>Customer Details</h1>  
          <p>{"name :"+customer.Username}</p>
          <p>{"Email :"+customer.Email}</p>
          <p>{"Phone :"+customer.Phone}</p>
          <p>{"address :"+customer.address}</p>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <h5>صورة الشخصية</h5>
    <img src={`http://localhost:4000/uploads/${customer.Fpassport}`} width="480px" height="280px"/>
    <h5>صورة جواز السفر الأمامية</h5>
    <img src={`http://localhost:4000/uploads/${customer.Bpassport}`} width="400px" height="280px"/>
    <h5>صورة جواز السفر الخلفية</h5>
    <img src={`http://localhost:4000/uploads/${customer.Personalimage}`} width="480px" height="280px"/>
    </div>

        </div>
    );
}
 
export default Customerdetails;