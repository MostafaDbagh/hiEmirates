import React from 'react';
import {Commondiv,H2,Card,Button,H3,P}from '../style/servicestyle'
const Service  = () => {
   
return ( 
    <div style={{margin:'32px auto'}}>
   <H2>
     خدمات 
    <span style={{color:'rgb(191, 214, 48)',fontStyle:'italic'}}> الموقع</span> </H2>
   <Commondiv>
   <Card>
     <H3>تأمين الفيز السياحية</H3>
     <P>
       ان مهمتنا الاساسية هي تقديم كافة التسهيلات والخدمات المضمونة لكافة الأشخاص وأول خدماتنا تتمثل باستخراج الفيزا 
       
       ولن تدفع قرش واحد حتى تضمن ان الفيزا اصبحت بين يداك ونختبر صلاحيتها والرقم التسلسلي للطلب  </P>
       <P>
        سنتحدث ايضا على انواع الفيز والإجراءات التي سوف تتبعها من اجل التقديم على الاقامة وان تشعر بالراحة لطرح اي سؤال سيقوم فريقنا بارشادك وتقديم كافة 
        الخدمات اللازمة
       </P>
     <Button>قدم الان</Button>
     </Card>
   <Card>
     <H3>تأمين خدمات السكن  </H3>
     <P>
       هي احدى اكبر المشاكل التي  تواجه الوافدين الجدد مشكلة المسكن وكيفية 
     البحث عنه وخصوصا بسبب غاتء اسعاد الاقامة بالفنادق لذلك شكلنا فريقا متخصص بحل تلك المشكلة وتوفير 
     المسكن الملائم حيث سيقوم احد عاملينا باستقبالكم من المطار وتوصيلكم الى السكن 
       </P>
       <P>سنقدم شرح كاملا  ووافيا لكم عن انواع المسكن والاسعار وكيفية ايجاد المحلات التجارية التي تتميز بالرخص والعروضات كل ماعليك 
         هو النقر على الزر </P>
     <Button>قدم الأن</Button>
     </Card>
   <Card>
     <H3>تأمين  استقبال من المطار   </H3>
     <P>
       ان كانت تلك اول مرة لك في الإمارات العربية المتحدة ولم تجد احدا في استقبالك فتلك ليست بالمشكلة الكبيرة 
       لا تقلق ان لم يكن لديك احد اقاربك هنا ايضا ليست بالمشكلة الكبيرة
        </P>
        <P>
          بعد ايفادنا بموعد وصول طائرتك ستجد احد عاملينا بانتظارك في المطار حتى وان تأخرت ستجده غي انتظارك ليقلك 
          الى مسكنك لي يغادر المطار الا وقدمك على قدمه وتطمين عائلتك على وصولك بالسلامة 
        </P>
     <Button>قدم الان</Button>
     </Card>
  
   </Commondiv>
 </div>
     );
}
 
export default Service ;