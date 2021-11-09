



import React from 'react';
import {Commondiv,H2,Card,Button,H3,P}from '../style/servicestyle'
import {Div,Title,Newsp} from './../style/news'

const News = () => {
    // const [post,setPost] = useState([])
    // function fetchPost() {
    //     fetch(`http://localhost:4000/getAllposts`)
    //     .then(res=>res.json())
    //     .then(data=>setPost(data.result))
    //     console.log(post)
    //  }
    //  useEffect(()=>{
    //      fetchPost()
    //  },[post])
    return ( 

        <>
        <h1>Last News</h1>
        {/* {post.map(i=>
         <div>
         <h2>{i.title}</h2>
         <p>{i.post}</p>
         </div>
            )} */}
       
     

        
  
   <H2>
   أخر 
    <span style={{color:'rgb(191, 214, 48)',fontStyle:'italic'}}> الأخبار</span> </H2>
  
    <Newsp>هنا ستجدون الأخبار الرسمية والصادرة عن دائرة الهجرة والجنسية وكل القرارت الجديدة فيما يخص السوريين

    </Newsp>
    <Div>
        <Title>اخبار الفيز للوافدين السوريين</Title>
        <Newsp>هذا وقد اشارت الأنباء عن سماح عودة الفيز للأخوة السوريين ول يحدد موعد لإغلاق صدور التأشيرات معربين عن حبهم للشعب السوري كونه شعب فتي لا ياكل ولايمل </Newsp>
    </Div>
    <Div>
        <Title>اخبار الفيز للوافدين السوريين</Title>
        <Newsp>هذا وقد اشارت الأنباء عن سماح عودة الفيز للأخوة السوريين ول يحدد موعد لإغلاق صدور التأشيرات معربين عن حبهم للشعب السوري كونه شعب فتي لا ياكل ولايمل </Newsp>
    </Div>
    <Div>
        <Title>اخبار الفيز للوافدين السوريين</Title>
        <Newsp>هذا وقد اشارت الأنباء عن سماح عودة الفيز للأخوة السوريين ول يحدد موعد لإغلاق صدور التأشيرات معربين عن حبهم للشعب السوري كونه شعب فتي لا ياكل ولايمل </Newsp>
    </Div>
    <Div>
        <Title>اخبار الفيز للوافدين السوريين</Title>
        <Newsp>هذا وقد اشارت الأنباء عن سماح عودة الفيز للأخوة السوريين ول يحدد موعد لإغلاق صدور التأشيرات معربين عن حبهم للشعب السوري كونه شعب فتي لا ياكل ولايمل </Newsp>
    </Div>
    <Div>
        <Title>اخبار الفيز للوافدين السوريين</Title>
        <Newsp>هذا وقد اشارت الأنباء عن سماح عودة الفيز للأخوة السوريين ول يحدد موعد لإغلاق صدور التأشيرات معربين عن حبهم للشعب السوري كونه شعب فتي لا ياكل ولايمل </Newsp>
    </Div>

    </>


    );
}
 
export default News;


