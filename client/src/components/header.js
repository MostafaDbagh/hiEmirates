import {Column,Header,Logo,Phone,Mail,Divbutton,Button } from '../style/headerstyle'
import Navbar from './Navbar'
import {useState} from 'react'


const Headersec = () => {
const [isClicked,setClicked] = useState(false);
    return (
<Header>
    <Column>
    <Logo>
  Space Y
    </Logo>
    <Phone>
     
     <span>+971586057772</span>  
    </Phone>
    <Mail>
 
     <span>mostafadbagh52@gmail.com</span>  
    </Mail>

    <Divbutton >
    <Button onClick={()=>setClicked(!isClicked)}>
     x
    </Button>
    </Divbutton>
</Column>


    {isClicked ? <Navbar/>: null }
  
     </Header>
      );
}
 
export default Headersec;

