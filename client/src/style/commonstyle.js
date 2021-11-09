import styled from "styled-components";


export const Parentdiv = styled.div`

position:relative;

`
export const Div = styled.div`
background:rgb(10,16,30);
color:white;
min-height:180px;
width:70%;
margin:12px 18px  12px 18px;
padding:24px 12px;
border-top-right-radius:50px;
border-bottom-left-radius:90px;
&:nth-child(odd){
  margin-right:auto
    }
&:nth-child(even){
  margin-left:auto
    }

`

export const H2 = styled.h2`
font-family: 'El Messiri', sans-serif;
text-align:center;
position:relative;
margin:0 auto;
padding:12px;
width:294px;
font-style:italic;
&:before{
    position:absolute;
    content:'';
    width:100%;
    height:2px;
    background:rgb(10,183,255);
    bottom:0px;
    right:-25px
    
}`
export const H22 = styled.h2`
font-family: 'El Messiri', sans-serif;
text-align:end;
position:relative;
width:300px;
padding:12px;
margin-left:auto;
font-style:italic;
margin-bottom:0
`

export const Newspp = styled.p`


margin: 6px 0 46px auto;
font-family: 'El Messiri', sans-serif;
width:70%;
direction:rtl;
line-height:35px;
@media(max-width:670px){
    width:94%;
    padding:12px ;
}

`
export const Newsp = styled.p`
text-align:center;
padding:12px ;
margin:12px auto;
font-family: 'El Messiri', sans-serif;
width:70%;

`