import React from 'react';


const Customerdetails  = () => {

  const handleoneuser= (n)=> {
    fetch(`https://hellouae.herokuapp.com/getuser/${n}`)
    .then(res=>res.text())
    .then(data=>console.log(data.result))
    
 }

    return (  
        <div>
          <button onClick={()=>handleoneuser(5)}> fetch</button>
          <h1>Customer Details</h1>  
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          
        </div>
    );
}
 
export default Customerdetails;