
import { Section } from "../style/servicestyle";
import React from 'react'
import{SectionPro,H2,Li,P}from '../style/productstyle'
import  Repeateddiv  from './imgtitle'
import myimg from '../img/Awn.jpg'

const ServiceTwo = () => {
    return ( 
        <>
        <Repeateddiv myimg={myimg}/>
        <SectionPro>
<H2>تقدم شركة العون خدماتها التمويلية لأصحاب المؤسسات و/أو الشركات الراغبين بشراء ما يحتاجونه من بضاعة
     او مستلزمات كهربائية لتطوير خدماتهم المقدمة لعملائهم
   
    </H2>
<ul>


<P>المزايا  :</P>
    <Li>متوافقة احكام الشريعة الإسلامية</Li>
    <Li>
        تمويل لغاية 100%</Li>
    <Li>
        تمويل من 200-3000دينار</Li>
    <Li>
        مدد السداد من 4  شهور لغاية 24 شهر
        
        </Li>
    <Li>
    فقط لأصحاب المحلات المرخصة</Li>
    
</ul>
<br/>
<ul>
<P>المستندات لمطلوبة  :</P>
<Li>تعبئة طلب تمويل</Li>
    <Li>
        عرض سعر موجه الى شركة عون للتمويل من الجهة التي ترغب شراء السلعة منها</Li>
    <Li>

    هوية أحوال مدنية سارية المفعول
        </Li>
    <Li>

    عقد ايجار المحل وسجلاته التجارية
        </Li>
    <Li>
       
    رخصة مهن سارية المفعول 
    </Li>
    <Li>
        
    كشف حساب بنكي لأخر6 شهور
    </Li>
</ul>

        </SectionPro>
        </>
     );
}
 
export default ServiceTwo;