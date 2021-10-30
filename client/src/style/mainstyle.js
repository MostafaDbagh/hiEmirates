import styled from 'styled-components'
import dubai from '../assests/image/dubai.jpg'
export const MainDiv = styled.div`
width:100%;
height:570px;
background-size:cover;
background-position:center bottom;

background:url(${dubai});
`
export const Overlay = styled.div`
width:100%;
height:100%;
background:rgba(0,0,0,0.7);
background-size:cover;
background-position:center bottom;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const H1 = styled.h1`
font-size:48px;
color:RGB(191,214,48);
margin:0 auto;
font-family: 'Almarai', sans-serif;
@media(max-width:670px){

 font-size:30px;
}

`
export const P = styled.p`
width:61%;
box-sizing:border-box;
text-align:center;
padding:16px;
font-size:24px;
color:RGB(248,248,251);
font-family: 'El Messiri', sans-serif;
@media(max-width:760px){
    font-size:20px;
    width:100%;
    padding:6px;
}
`
export const Para = styled.p`
background:rgb(191,214,48);
padding:8px;
font-size:26px;
font-family: 'Almarai, sans-serif';
margin:4px auto;
min-height:40px
line-height:40px;


`