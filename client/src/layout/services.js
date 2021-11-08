import React from 'react';
import {Label,Input,Select,Para } from '../style/service.js'
import {Commondiv,H2,Card,Button,H3,P}from '../style/servicestyle'

const Services = () => {
    return ( 
        <>
        <H2>استقبالك من المطار مهمتنا </H2>
<Para >ان لم يكن احد قاربك في الامارات او ان لم يكن احد بمقدوره استقبالك فلا داعي للقلق ابداكل ماعليك فعله هو ان تملىء هذا الفورم.</Para>
<form>
    <div style={{display:'flex',flexDirection:'column',direction:'rtl'}}>
        <Label>موعد الانطلاق الرحلة</Label>
        <Input type="text" placeholder="الرجاء ادخال موعد  انطلاق"/>
    </div>
    <div style={{display:'flex',flexDirection:'column',direction:'rtl'}}>
        <Label>موعد وصول الرحلة</Label>
        <Input type="text" placeholder="الرجاء ادخال موعد  وصول"/>
    </div>
    <div style={{display:'flex',flexDirection:'column',direction:'rtl'}}>
        <Label>اسم مطار المغادرة </Label>
        <Input type="text" placeholder="الرجاء ادخال اسم المطار المغادرة"/>
    </div>
    <div style={{display:'flex',flexDirection:'column',direction:'rtl'}}>
        <Label>اسم مطار الوصول </Label>
        <Input type="text" placeholder="الرجاء ادخال اسم المطار الوصول"/>
    </div>
    <div style={{display:'flex',flexDirection:'column',direction:'rtl'}}>
        <Label>رقم الرحلة ان أمكن </Label>
        <Input type="text" placeholder="الرجاء ادخال رقم الرحلة "/>
    </div>
    <div style={{display:'flex',flexDirection:'column',direction:'rtl'}}>
        <Label>رقم الواتساب</Label>
        <Input type="text" placeholder="الرجاء ادخال رقم الواتساب"/>
    </div>
    <div style={{display:'flex',flexDirection:'column',direction:'rtl'}}>
        <Label>نوع السيارة</Label>
        <Select type="text" placeholder="الرجاء ادخال نوع السيارة">
            <option>غير مهم النوع </option>
            <option></option>
            <option></option>
            </Select>
    </div>
</form>
<Para>سيتواصل معك احد عملاءنا لطلب صورة حديثة  للشخص الراغب بالسفر </Para>
        </>
     );
}
 
export default Services;