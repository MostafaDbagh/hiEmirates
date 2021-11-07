import React,{useState} from 'react';
import bed from '../assests/image/bed space.jpg'
import master from '../assests/image/masterbedroom.jpg'
import Partition from '../assests/image/partition.jpg'
import studio from '../assests/image/studio.jpg'
import{Div,Anchorsocial,Li,Registerinput,Textare,Button,Registerselect} from '../style/subscribestyle'
import {List,Icon,Ul,Span,H1,P,Sectionimg,Option,Form} from './../style/rent'
const Rent = () => {

<h2 style={{ color:'white',textAlign:'start',width:'30%',marginRight:'12px',fontFamily: 'Almarai, sans-serif'}}> استأجر معنا  </h2>
    return ( 
        <>
          <div>
              <div style={{width:'100%',height:'64px'}}></div>
              <div style={{display:'flex',flexDirection:'column',background:'black'}}>
              <h2 style={{ color:'white',textAlign:'end',width:'92%',fontFamily: 'Almarai, sans-serif'}}> استأجر معنا  </h2> 
        <Form >
    
        
       
          

        <Button small  > ارسال</Button>
         <div style={{display:'flex',margin:"12px 0"}}>
                <Registerinput  type="text" placeholder="اقل قيمة" style={{margin:'0 4px',width:'100px'}}   />
                <Registerinput  type="text" placeholder="اعلى قيمة"  style={{margin:'0 4px',width:'100px'}}   />
                </div>
                <Registerinput small type="text" placeholder="ادخل   المنطقة "   style={{margin:'0 12px'}}   />

        <Registerselect small>
            <Option value="bedspace">استئجار تخت</Option>
            <Option value="partition">استئجار بارتشن</Option>
            <Option value="master-bedroom"> ماستر بيد رروم</Option>
            <Option value="studio">استئجار استديو</Option >
        </Registerselect>
         
     <Registerselect small >
            <Option value="dubai">دبي</Option>
            <Option value="sharjaha">شارقة</Option>
            <Option value="Abu Dhabi">ابو ظبي</Option>
            <Option value="Ajman">عجمان</Option>
            <Option value="Fujeira">فجيرة</Option>
            <Option value="umm quein">ام القيوين</Option>
    </Registerselect>
   
    
         
   
</Form>
</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'64px'}}>
       
        <div style={{display:'flex',marginBottom:'32px',justifyContent:'space-between',flexWrap:'wrap'}}>
            <Sectionimg >
                <img width="90%" height="80%" alt="beb sapce image" style={{objectFit:'cover'}} src={bed}/>
                </Sectionimg>

                <section style={{width:"500px",margin:"0 32px"}}>
        <H1> :(Bed Space)مساحة تخت  </H1>
        <P>وهي ان تقوم باستئجار تخت في غرفة بحيث سيكون معك عدة اشخاص من مختلف الجنسيات وسيكون عندك خزانة خاصة فيك وسيكون الحمام والمطبخ  مشترك بين الجميع  </P>
        <P> :اما اسعار متفاوتة حيث يتم اخذ اكثر من امر في الحسبان</P>
        <Ul>
            <List><Span>نوع واسم المنطقة السكنية </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span> البناء فيما اذا كان قديم او جديد </Span><Icon className="las la-check-circle"></Icon></List>
            <List><Span>القرب من محطات المترو أو مواقف الباص </Span><Icon className="las la-check-circle"></Icon></List>
            <List><Span>  مكان السرير اذا كان في سرير طابق ثاني او او اول   </Span><Icon className="las la-check-circle"></Icon></List>
            <List><Span>   الاسعار تكون ابتداءا  من 600 درهم وتكون متفاوتة وليس سعرا قياسيا ولا يمكن تعميمه </Span><Icon className="las la-check-circle"></Icon></List>
        </Ul>
        </section>
        </div>

        <div style={{display:'flex',justifyContent:'space-between',marginBottom:'32px',flexWrap:'wrap'}}>
        <Sectionimg>
        <img width="90%" height="80%" alt="beb sapce image"style={{objectFit:'cover'}} src={Partition}/>
                </Sectionimg>

                <section style={{width:"500px",margin:"0 32px"}}>
        <H1>:(Partition) بارتشن</H1>
        <P> عبارة عن شقة يتم تقسيمها لغرف صغيرة يمكن الشقة الواحدة ان تحتوي على 7 بارتشن او اكثر</P>
        <P> هي ان تقوم باستئجار غرفة صغيرة لوحدك لا يشاركك احد فيها غالبا ماتكون مساحتها صغيرة تتراوح بين 5 امتار طولا و4 امتار عرضا سيكون بداخلها سريرك وخزانتك لوحدك سيكون الحمام والمطبخ مشتركا بين الجميع   </P>
        <P> :اما اسعارمتفاوتةحيث يتم اخذ اكثر من امر في الحسبان</P>
        <Ul>
            <List><Span>نوع واسم المنطقة السكنية </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span> البناء فيما اذا كان قديم او جديد </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>القرب من محطات المترو أو مواقف الباص </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>   مساحة البارتشن الذي سوف تستأجره   </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>غالبا   الاسعار تكون ابتداءا من 1000 درهموتكون متفاوتة وليس سعرا قياسيا ولا يمكن تعميمه </Span><Icon className="las la-check-circle" ></Icon></List>
        </Ul>
        </section>
        </div>

          <div style={{display:'flex',marginBottom:'16px',flexWrap:'wrap'}}>
        <Sectionimg>
        <img width="90%" height="80%" alt="beb sapce image" style={{objectFit:'cover'}} src={master}/>
                </Sectionimg>

                <section style={{width:"500px"}}>
        <H1>:(Master Bedroom)ماستر بيد رووم</H1>
      
        <P> عبارة عن غرفة اكثر ما يميزها انها تحتوي على حمام خاص</P>
        <P> هي ان تقوم باستئجار غرفة  لوحدك لا يشاركك احد فيها غالبا ماتكون مساحتها اكبر من البارتشن         سيكون بداخلها سريرك وخزانتك وحمامك  لوحدك سيكون  والمطبخ مشتركا بين الجميع   </P>
        <P> :اما اسعارمتفاوتةحيث يتم اخذ اكثر من امر في الحسبان</P>
        <Ul>
            <List><Span>نوع واسم المنطقة السكنية </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span> البناء فيما اذا كان قديم او جديد </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>القرب من محطات المترو أو مواقف الباص </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>   مساحة الغرفة الذي سوف تستأجره   </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>غالبا   الاسعار تكون ابتداءا من 1300 درهموتكون متفاوتة وليس سعرا قياسيا ولا يمكن تعميمه </Span><Icon className="las la-check-circle" ></Icon></List>
        </Ul>
     </section>
        </div>

        <div style={{display:'flex',marginBottom:'48px',flexWrap:'wrap'}}>
        <Sectionimg>
        <img width="90%" height="80%" alt="beb sapce image" style={{objectFit:'cover'}} src={studio}/>
                </Sectionimg>

                <section style={{width:"500px"}}>
        <H1> :(Studio) استديو</H1>
        <P> عبارة عن غرفة كبيرة اكثر ما يميزها انها تحتوي على حمام خاص  ومطبخ خاص</P>
        <P>        هي ان تقوم باستئجار غرفة غالبا ماتكون مرتبط بكتابة عقد بينك وبين المالكوالدفع يكون عن طريق شيكات مؤجلة     </P>
        <P> :اما اسعارمتفاوتةحيث يتم اخذ اكثر من امر في الحسبان</P>
        <Ul>
            <List><Span>نوع واسم المنطقة السكنية </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span> البناء فيما اذا كان قديم او جديد </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>   دفع التأمينات على الكهرباء وكومسيون المكتب وتأمين الضمان  </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>القرب من محطات المترو أو مواقف الباص </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>   مساحة الاستديو الذي سوف تستأجره   </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>     ستكون ملزما بدفع فواتير الماء والكهرباء وهذا ما يطلق عليه اسم  ديوا   وفواتير الانترنت  </Span><Icon className="las la-check-circle" ></Icon></List>
            <List><Span>غالبا   الاسعار تكون ابتداءا من 17000 سنويا درهموتكون متفاوتة وليس سعرا قياسيا ولا يمكن تعميمه </Span><Icon className="las la-check-circle" ></Icon></List>
        </Ul>
        </section>
        </div>
        </div>
      
    
        </>
     );
}
 
export default Rent ;