import React from 'react';
import {Nav,Unorderlist,List,Anchor } from '../style/headerstyle'
const Navbar = () => {
    return ( 
        <Nav>
<Unorderlist>
    <List><Anchor href="/">الرئيسية</Anchor></List>
    <List><Anchor href="/News">اخر الأخبار</Anchor></List>
    <List><Anchor href="/Rent">أنواع السكن</Anchor></List>
    <List><Anchor href="/Services">خدمات أخرى</Anchor></List>
    <List><Anchor href="/Aboutus" > من نحن</Anchor></List>
    <List><Anchor href="/Contact">اتصل بنا</Anchor></List>

  
    </Unorderlist>
</Nav>
     );
}
 
export default Navbar;