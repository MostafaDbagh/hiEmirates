import React from 'react';
import bed from '../assests/image/bed space.jpg'
import master from '../assests/image/masterbedroom.jpg'
import Partition from '../assests/image/partition.jpg'
import studio from '../assests/image/studio.jpg'
import {Commondiv,H2,Card,Button,H3,P}from '../style/servicestyle'
import {Div,Title,Newsp} from './../style/news'
const Rent = () => {
    return ( 
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'64px'}}>
       
        <div style={{display:'flex'}}>
            <section>
                <img width="250" height="250" alt="beb sapce image" src={bed}/>
                </section>
                <section style={{width:"500px"}}>
        <h1> :(Bed Space)مساحة تخت   </h1>
        <p>وهي ان تقوم باستئجار تخت في غرفة بحيث سيكون معك عدة اشخاص من مختلف الجنسيات وسيكون عندك خزانة خاصة فيك وسيكون الحمام والمطبخ  مشترك بين الجميع  </p>
        <p> اما اسعارمتفاوتةحيث يتم اخذ اكثر من امر في الحسبان</p>
        <ul>
            <li><span>نوع واسم المنطقة السكنية </span></li>
            <li><span> البناء فيما اذا كان قديم او جديد </span></li>
            <li><span>القرب من محطات المترو أو مواقف الباص </span></li>
            <li><span>  مكان السرير اذا كان في سرير طابق ثاني او او اول   </span></li>
            <li><span>غالبا   الاسعار تكون ابتداءا من 600 درهموتكون متفاوتة وليس سعرا قياسيا ولا يمكن تعميمه </span></li>
        </ul>
        </section>
        </div>

        <div style={{display:'flex',flexDirection:'row-reverse'}}>
        <section>
        <img width="250" height="250" alt="beb sapce image" src={bed}/>
                </section>
                <section style={{width:"500px"}}>
        <h1>:(Partition) بارتشن</h1>
        <p> عبارة عن شقة يتم تقسيمها لغرف صغيرة يمكن الشقة الواحدة ان تحتوي على 7 بارتشن او اكثر</p>
        <p> هي ان تقوم باستئجار غرفة صغيرة لوحدك لا يشاركك احد فيها غالبا ماتكون مساحتها صغيرة تتراوح بين 5 امتار طولا و4 امتار عرضا سيكون بداخلها سريرك وخزانتك لوحدك سيكون الحمام والمطبخ مشتركا بين الجميع   </p>
        <p> اما اسعارمتفاوتةحيث يتم اخذ اكثر من امر في الحسبان</p>
        <ul>
            <li><span>نوع واسم المنطقة السكنية </span></li>
            <li><span> البناء فيما اذا كان قديم او جديد </span></li>
            <li><span>القرب من محطات المترو أو مواقف الباص </span></li>
            <li><span>   مساحة البارتشن الذي سوف تستأجره   </span></li>
            <li><span>غالبا   الاسعار تكون ابتداءا من 1000 درهموتكون متفاوتة وليس سعرا قياسيا ولا يمكن تعميمه </span></li>
        </ul>
        </section>
        </div>

          <div style={{display:'flex'}}>
        <section>
        <img width="250" height="250" alt="beb sapce image" src={bed}/>
                </section>
                <section style={{width:"500px"}}>
        <h1>:(Master Bedroom)ماستر بيد رووم</h1>
      
        <p> عبارة عن غرفة اكثر ما يميزها انها تحتوي على حمام خاص</p>
        <p> هي ان تقوم باستئجار غرفة  لوحدك لا يشاركك احد فيها غالبا ماتكون مساحتها اكبر من البارتشن         سيكون بداخلها سريرك وخزانتك وحمامك  لوحدك سيكون  والمطبخ مشتركا بين الجميع   </p>
        <p> اما اسعارمتفاوتةحيث يتم اخذ اكثر من امر في الحسبان</p>
        <ul>
            <li><span>نوع واسم المنطقة السكنية </span></li>
            <li><span> البناء فيما اذا كان قديم او جديد </span></li>
            <li><span>القرب من محطات المترو أو مواقف الباص </span></li>
            <li><span>   مساحة الغرفة الذي سوف تستأجره   </span></li>
            <li><span>غالبا   الاسعار تكون ابتداءا من 1300 درهموتكون متفاوتة وليس سعرا قياسيا ولا يمكن تعميمه </span></li>
        </ul>
     </section>
        </div>

        <div style={{display:'flex',flexDirection:'row-reverse'}}>
        <section>
        <img width="250" height="250" alt="beb sapce image" src={bed}/>
                </section>
                <section style={{width:"500px"}}>
        <h1>Studio</h1>
        <p> عبارة عن غرفة كبيرة اكثر ما يميزها انها تحتوي على حمام خاص  ومطبخ خاص</p>
        <p>        هي ان تقوم باستئجار غرفة غالبا ماتكون مرتبط بكتابة عقد بينك وبين المالكوالدفع يكون عن طريق شيكات مؤجلة     </p>
        <p> اما اسعارمتفاوتةحيث يتم اخذ اكثر من امر في الحسبان</p>
        <ul>
            <li><span>نوع واسم المنطقة السكنية </span></li>
            <li><span> البناء فيما اذا كان قديم او جديد </span></li>
            <li><span>   دفع التأمينات على الكهرباء وكومسيون المكتب وتأمين الضمان  </span></li>
            <li><span>القرب من محطات المترو أو مواقف الباص </span></li>
            <li><span>   مساحة الاستديو الذي سوف تستأجره   </span></li>
            <li><span>     ستكون ملزما بدفع فواتير الماء والكهرباء وهذا ما يطلق عليه اسم  ديوا   وفواتير الانترنت  </span></li>
            <li><span>غالبا   الاسعار تكون ابتداءا من 17000 سنويا درهموتكون متفاوتة وليس سعرا قياسيا ولا يمكن تعميمه </span></li>
        </ul>
        </section>
        </div>
        </div>
     );
}
 
export default Rent ;