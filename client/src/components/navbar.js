import React from 'react';
import {Nav,Unorderlist,List,Anchor } from '../style/headerstyle'
const Navbar = () => {
    return ( 
        <Nav>
<Unorderlist>
    <List><Anchor href="https://hellouae.herokuapp.com">الرئيسية</Anchor></List>
    <List><Anchor href="https://hellouae.herokuapp.com//News">اخر الأخبار</Anchor></List>
    <List><Anchor href="https://hellouae.herokuapp.com//Rent">أنواع السكن</Anchor></List>
    <List><Anchor href="https://hellouae.herokuapp.com//Services">خدمات أخرى</Anchor></List>
    <List><Anchor href="https://hellouae.herokuapp.com//Aboutus" > من نحن</Anchor></List>
    <List><Anchor href="https://hellouae.herokuapp.com//Contact">اتصل بنا</Anchor></List>

  
    </Unorderlist>
</Nav>
     );
}
 
export default Navbar;