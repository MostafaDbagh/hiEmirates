import React from 'react';
import {Nav,Unorderlist,List,Anchor } from '../style/headerstyle'
const Navbar = () => {
    return ( 
        <Nav>
<Unorderlist>
    <List><Anchor href="/">الرئيسية</Anchor></List>
    <List><Anchor href="#">اخر الأخبار</Anchor></List>
    <List><Anchor href="#">أنواع السكن</Anchor></List>
    <List><Anchor href="/about">خدمات أخرى</Anchor></List>
    <List><Anchor href="/intro" > من نحن</Anchor></List>
    <List><Anchor href="/contact">اتصل بنا</Anchor></List>

  
    </Unorderlist>
</Nav>
     );
}
 
export default Navbar;