import React,{useRef, useState} from 'react'
import { Contaier,Form,Div ,Fileinputcontainer,Label,Button} from '../style/fileupload';
import {Contactinput,} from '../style/layoutstyle'
import {H2,Headign2,Ul,List,Paragraph}from '../style/servicestyle'
import axios from 'axios';
import Joi from "joi-browser";
 
const FileUpload =()=>{
   const messagestyle={
     width:"70%",
     color:'rgb(10,183,255)',
     margin: '24px 30px 0 30px',
     textAlign:'center',
     display:'none',
     fontFamily: 'El Messiri, sans-serif'
   }
      const [isclicked ,setIsclicked] = useState(false)
      let [post,setPost] = useState({
        text:"",
        title:""
      })
      const [errors, setErrors] = useState({});
      let [file, setFile] = useState();
      
      let [pp, setP] = useState();
      let [Bpp, setBP] = useState();
      let [text,setText] =useState({
        name:'',
        Email:'',
        phone:'',
        address:''
      })
      const messageRef = useRef();
      const schema = {
        name: Joi.string().min(1).max(30).required(),
        Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        phone: Joi.number().required(),
        address: Joi.string().required(),
      };
  
      const validateForm = (event) => {
        event.preventDefault();
        const result = Joi.validate(text,schema, { abortEarly: false });
        const { error } = result;
        if (!error) {
            const data = new FormData();
   data.append('name',text['name']);
   data.append('Email',text['Email']);
   data.append('address',text['address']);
   data.append('phone',text['phone']);
   data.append('Personalimage',file);
   data.append('FPP',pp);
   data.append('BPP',Bpp);
   axios.post('http://localhost:4000/adduser',data)
  setIsclicked(true)
   setText({
    name:'',
    Email:'',
    phone:'',
    address:''
   })
   messageRef.current.style.display="block"
   setTimeout(() => {
    messageRef.current.style.display="none"
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
      };
    const makePost = ()=>{
      console.log(post)
     axios.post('https://hellouae.herokuapp.com//createpost',post).then(res=>res.json(res))
    }
      return (
        <>
          <H2> تسجيل <span style={{color:'rgb(191, 214, 48)',fontStyle:'italic'}}>طلبك
          </span>  </H2>
        <Contaier>
        <Div>
<Headign2>ارشادات عليك التقيد بها للتقديم بشكل صحيح</Headign2>
<Ul>
  <List><Paragraph>عند إدخال الاسم يجب عليك التأكد ان يكون الاسم مطابق لاسمك  في جواز السفر وان يكون مكتوب باللغة الانكليرية</Paragraph></List>
  <List><Paragraph>الرقم المدخل يدب ام يحتوي على رمز الدولة (سوريا 00963)</Paragraph></List>
  <List><Paragraph>سيقوم احد عملاءنا بالتواصل معك بعد اكمال ادخالك للبيانات المطلوبة خلال 24 ساعة</Paragraph></List>
  <List><Paragraph> عنوان السكن غير  مهم سواء أكان باللغة العربية او الانكليزية</Paragraph></List>
  <List><Paragraph>يجب عليك التأكد من عنوان البريد الالكتروني المدخل باعتباره وسيلة التواصل الرسمية سيتم ارسال رسالة الى بريدك
    الإلكتروني ويمكنك من خلال البريد الالكتروني حماية نفسك وحقوقك </Paragraph></List>
    <List><Paragraph>عليك تحميل صورة ذات خلفية بيضاء وان تكون واضحة في حال عدم وضوح الصورة سيقوم احد عملاءنا بالتواصل معك وطلب صور ذات 
      جيدة
      لان هذه الصورة ستكون على اذن الدخول والفيزا 
       </Paragraph></List>
      <List><Paragraph>
        عليك ان تكون حريص على ان تكون صور الخاصة بالجواز صورد واضحة وان تكون خالية من صور الاصابع تايدان عند التقاط الصورة وان تكون المعلومات والتفاصيل واضحة 
        </Paragraph></List>
      <List><Paragraph>
        كن على يقين تام انك في المكان الصحيح وانك في ايدي امينة 
        </Paragraph></List>
</Ul>
        </Div>

        <Form  onSubmit={validateForm} encType="multipart/form-data" method="post"  >
  <div style={{padding:'36px 0'}}>
  
  <Fileinputcontainer>
  <Label style={{direction:'rtl'}} >الرجاء ادخال صورة شخصية ذات خلفية بيضاء</Label> 
    <Contactinput type="text" value={text['name']}  placeholder="الرجاء ادخال الاسم" id="name" onChange={(e)=> setText({...text,name:e.target.value})}/>   
    </Fileinputcontainer>

    <Fileinputcontainer>
    <Label style={{direction:'rtl'}} >الرجاء ادخال صورة شخصية ذات خلفية بيضاء</Label> 
    <Contactinput type="text" value={text['phone']} placeholder="الرجاء ادخال رقم الموبايل" id="phone" onChange={(e)=> setText({...text,phone:e.target.value})}/>
    </Fileinputcontainer>

    <Fileinputcontainer>
    <Label style={{direction:'rtl'}} >الرجاء ادخال صورة شخصية ذات خلفية بيضاء</Label> 
    <Contactinput type="text"  value={text['address']} placeholder="الرجاء ادخال عنوان السكن" id="address" onChange={(e)=> setText({...text,address:e.target.value})}/>
    </Fileinputcontainer>
    
    <Fileinputcontainer>
    <Label style={{direction:'rtl'}} >الرجاء ادخال صورة شخصية ذات خلفية بيضاء</Label> 
    <Contactinput type="text" value={text['Email']} placeholder="الرجاء ادخال ايميل" id="email" onChange={(e)=> setText({...text,Email:e.target.value})}/>
    </Fileinputcontainer>

    <Fileinputcontainer>
    <Label style={{direction:'rtl'}} >الرجاء ادخال صورة شخصية ذات خلفية بيضاء</Label>
    <Contactinput type="file"  name="safifile"  
      onChange={(e)=>{
      const file = e.target.files[0];
      setFile(file)
    } }/>
    </Fileinputcontainer>

    <Fileinputcontainer>
 <Label  >الرجاء ادخال صورة الجواز الامامية   </Label>
    <Contactinput type="file"  name="safifile" placeholder=""
      onChange={(e)=>{
      const file = e.target.files[0];
      setP(file)
    } }/>
    </Fileinputcontainer>

    <Fileinputcontainer>
    <Label  >الرجاء ادخال صورة الجواز   الخلغية</Label>
    <Contactinput type="file"  name="safifile" placeholder=""
      onChange={(e)=>{
      const file = e.target.files[0];
      setBP(file)
    } }/>     
    </Fileinputcontainer>
    <Button disabled={isclicked} type="submit" value="تسجيل" />
  </div>
<span style={messagestyle} ref={messageRef}>شكرا لكم. لقد تم تسجيل طلبكم بنجاح</span>
</Form>

</Contaier>
</>
      );
    }

 
export default FileUpload;

