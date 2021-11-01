import styled from "styled-components";

export const Contaier = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
flex-direction: row-reverse;
background:#e8ebe7;

`
export const Div = styled.div`
width:600px;

margin:24px auto 16px;
`
export const Form = styled.form`
width:600px;
position:relative;
border:1px solid black;
border-bottom:none;
border-left:none;
border-top:none;
margin-bottom:33px;
@media(max-width:760px){

}


`
export const Fileinputcontainer = styled.div`
position:relative;
height:80px;
`
export const Label = styled.label`
position:absolute;
right:20px;
bottom:75px;
font-family: 'El Messiri', sans-serif;
`
export const Button = styled.input`
background:rgb(191,214,48);
width:140px;
hieght:50px;
padding:12px 24px;
color:white;
border-radius:5px;
border:none;
position:absolute;
left:30%;
margin-bottom:32px;
font-family: 'Almarai', sans-serif;
font-weight:bold;


`