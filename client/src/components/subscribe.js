import React, { useRef } from 'react';
import { useState } from 'react';
import{Div,Anchorsocial,Li,Registerinput,Textare,Button} from '../style/subscribestyle'
import axios from 'axios';
import Joi from "joi-browser";


const Subscribe = () => {

  const messagestyle={
    fontSize:'14px',
    width:"70%",
    color:'rgb(10,183,255)',
    margin: '8px 30px 12px 30px',
    textAlign:'center',
    fontFamily: 'El Messiri, sans-serif',
    display:'none'
  }
    const [errors, setErrors] = useState({});
  let [contact,setContact] = useState({
      email:'',
      whatsapp:'',
      fb:'',
      msg:'',
  })
  let [isClicked,setIsclicked]= useState(false)
  const msgRef = useRef();
  const schema = {
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    whatsapp: Joi.string().required(),
    fb
    : Joi.string().required(),
    msg:Joi.string().required(),
  };
  const handleClick =async ()=>{
   const result = Joi.validate(contact,schema, { abortEarly: false });
    
    const { error } = result;
    if (!error) {
 
     axios.post('https://hellouae.herokuapp.com/addquery',contact)
     msgRef.current.style.display="block"
     setTimeout(() => {
      setContact({
        email:'',
        whatsapp:'',
        fb:'',
        msg:'',
      })
      msgRef.current.style.display="none"
     }, 3000);
 
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      setErrors(errorData);
     console.log(errorData)
     for (let index in errorData){
       alert(errorData[index])
     }
    }
setIsclicked(true)
  }

 
    return(
        <Div>
            <div style={{width:"340px",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',background:'black',borderRadius:'5px',direction:'rtl'}}>
                <h2 style={{ color:'white',textAlign:'start',width:'90%',marginRight:'12px',fontFamily: 'Almarai, sans-serif'}}>اطرح استفسارك  </h2>
                <Registerinput type="text" placeholder="ادخل بريدك الالكتروني " value={contact['email']} onChange={(e)=>setContact({...contact,email:e.target.value})}  />
                <Registerinput type="text" placeholder="ادخل رقم تواصل الواتساب" value={contact['whatsapp']}onChange={(e)=>setContact({...contact,whatsapp:e.target.value})}   />
                <Registerinput type="text" placeholder="ادخل حساب الفيس البوك " value={contact['fb']}  onChange={(e)=>setContact({...contact,fb:e.target.value})}  />
                <Textare cols="39" rows="5" placeholder="اكتب جميع استفساراتك هنا " value={contact['msg']}onChange={(e)=>setContact({...contact,msg:e.target.value})} ></Textare>
                <Button disabled={isClicked}  onClick={()=>handleClick()}> ارسال</Button>
                <span style={messagestyle}  ref={msgRef}> سيتم الرد عليكم في مدة اقصاها ساعتين </span>
            </div>
            
            <div>
                <ul style={{margin:"0",padding:'0'}}>
                <p style={{fontSize:'20px',color:"rgb(191,214,48)",fontFamily: 'Almarai, sans-serif'}}>
                   <strong>الخدمات التي نقدمها</strong>  </p>
                <Li><Anchorsocial href="#">تأمين استقبال من المطار</Anchorsocial> </Li>
                <Li><Anchorsocial href="#">تأمين مسكن ملائم</Anchorsocial></Li>
                <Li><Anchorsocial href="#">الاجابة على استفسارات</Anchorsocial></Li>
                <Li><Anchorsocial href="#">تأمين فرص عمل  </Anchorsocial></Li>
                </ul>
            </div>
            
            <div>
                <ul>
            <p style={{fontSize:'20px',color:"rgb(191,214,48)",fontFamily: 'Almarai, sans-serif'}}>
              <strong>  وسائل التواصل الاجتماعي :
              </strong>
              </p>
                <Li><Anchorsocial  href="#">صفحتنا على الفيس بوك</Anchorsocial>   </Li>
                <Li><Anchorsocial style={{fontFamily: 'Teko, sans-serif',fontSize:"18px",letterSpacing:'2px'}}  href="tel:+971586057772">971586057772+</Anchorsocial></Li>
                <Li><Anchorsocial  style={{fontFamily: 'Teko, sans-serif',fontSize:"18px",letterSpacing:'1px'}} href="mailto:mostafadbagh52@gamil.com">MostafaDbagh52@gmail.com</Anchorsocial></Li>
                <Li><Anchorsocial   href="#">عنوان مكتبنا</Anchorsocial></Li>
                </ul>
            </div>
        </Div>
    )
 
}
 
export default Subscribe;