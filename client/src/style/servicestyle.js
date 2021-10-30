import styled from 'styled-components'


export const Commondiv = styled.div`
width:98%;
margin:32px auto;
display:grid;
grid-template-columns:33% 33% 33%;
justify-items:center;
align-items:center;
grid-gap:15px;
@media(max-width:670px){
 
    grid-template-columns:1fr ;
}
`

export const H2 = styled.h2`
font-family: 'El Messiri', sans-serif;
text-align:center;
position:relative;
margin:48px auto;
width:400px;
&:before{
    position:absolute;
    content:'';
    width:150px;
    height:2px;
    background:black;
    top:50%;
    right:350px
}

`
export const Headign2 = styled.h2`
direction:rtl;
Padding:6px 0px;
margin:24px 0;
font-family: 'Almarai', sans-serif;
`
export const Ul = styled.ul`
direction:rtl;
`
export const Paragraph = styled.p `
padding:6px 12px;
margin:12px;
font-weight:bold;
font-family: 'El Messiri', sans-serif;

`
export const List = styled.li`
width:88%;
::marker{
   color:rgb(191,214,48) 
}
`
export const Main = styled.main`
display:flex;
height:225px;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin:32px auto;
text-align:center;
padding:6px;
overflow:hidden;
`

export const Divbutton = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
max-height:50px;
margin:8px;
`




export const Section = styled.section`


background:rgb(50,50,52);
border-radius:25px;
overflow:hidden;
width:98%;
margin:0 auto;
min-height:288px;
`
export const Form = styled.form`
width:100%;

direction:rtl;


`
export const Inputdiv = styled.div`
display:flex;
justify-content:center;
margin-bottom:32px;
flex-wrap:wrap;



`
export const Label = styled.label`
width:245px;
height:20px;
font-size:14px;
margin:8px 0 8px;
color:rgb(248,248,251);
@media(max-width:670px){
    width:84vw;
   margin:0;
    padding:15px;
    text-align:start;
    margin:8px;
   }
`
export const Select = styled.select`
width:265px;
height:46px;
outline:0;
margin:0 25px 0 0 ;
padding:6px 12px;
background:#fff;
box-shadow: 0 0 3px 1px rgb(172,173,177) inset;
color:rgb(16,30,40);
@media(max-width:670px){
    width:84vw;
    height:34px;
   margin:0;
    
   }
`
export const Input = styled.input`
width:265px;
height:44px;
margin:0 25px 0 0 ;
padding:6px 12px;
background:#fff;
direction:rtl;
box-shadow: 0 0 3px 1px rgb(172,173,177) inset;
outline:0;
border:0;
@media(max-width:670px){
 width:84vw;
margin:0;
 padding:15px
}



`


export const Buttondiv = styled.div`
width:80vw;
margin:0 auto;

&:first-child{
    margin-right:550px;
}
`

export const Buttonud = styled.button`
border:0;
font-size:24px;
background:transperent;
outline:none;
border:0;
width:30px;
height:30px;
padding:10px;
color:rgb(10,183,255);

&:hover{
    transform:scale(1.3)
}


`
export const Card = styled.section`
width:320px;
height:390px;
text-align:center;
box-shadow:0px 0px 5px 0px black;
position:relative;
border-radius:5px;
background:rgb(16,30,40)
`
export const Button = styled.button`
position:absolute;
bottom:20px;
right:10px;
padding:8px 18px;
width:162px;
height:38px;
background:black;
color:rgb(248,248,251);
border:1px solid rgb(214,291,48);
border-radius:10px;
font-size:14px;
font-style:italic;
box-shadow:-1px 0px 1px 0px rgb(214,291,48 )inset  ;

letter-spacing:1px;
font-family: 'Almarai, sans-serif'

`
export const H3 = styled.h3`
font-size:20px;
font-weight:bold;
padding:12px 6px;
position:relative;
color:#e5e4e2;
font-family: 'Almarai', sans-serif;
&:after{
position:absolute;
content:'';
width:100px;;
height:2px;
color:red;
background:rgb(191,214,48);
left:115px;
top:55px;
}

`
export const  P = styled.p`
font-size:14px;
width:293px;
padding:6px 10px 2px;
line-height:22px;
margin:3px;
font-family: 'El Messiri', sans-serif;
color:white;


`