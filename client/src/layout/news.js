import React, { useEffect, useState } from 'react';

const News = () => {
    const [post,setPost] = useState([])
    function fetchPost() {
        fetch(`http://localhost:4000/getAllposts`)
        .then(res=>res.json())
        .then(data=>setPost(data.result))
        console.log(post)
     }
     useEffect(()=>{
         fetchPost()
     },[post])
    return ( 
        <>
        <h1>Last News</h1>
        {post.map(i=>
         <div>
         <h2>{i.title}</h2>
         <p>{i.post}</p>
         </div>
            )}
       
        </>
    );
}
 
export default News;


