import styled from 'styled-components'
export const Div  = styled.div`
direction:rtl;
overflow:hidden;
min-height:360px;
padding:16px;
background:rgb(16,30,40);
margin: 0 auto 0;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
grid-gap:8px;
align-items:center;
justify-items:center;

@media(max-width:670px){
 
    grid-template-columns:1fr ;
}

`
export const Subinput = styled.input`
width:370px;
height:44px;
padding:12px 18px;
background:#fff;
direction:rtl;
border-radius:5px;
border:0;
box-shadow:0px 0 1px 1px rgb(16,18,20) inset;
`
export const Subbutton = styled.button`
margin: 0 8px ;
background:rgb(10,183,255);
padding:6px 18px;
width:112px;
height:38px;
border-radius:2px;
border:1px solid white;
font-size:16px;
font-family:tajawal,sans-serif;
color:rgb(248,248,251)
`
export const Li = styled.li`
list-style:none;
margin:12px 0;

`
export const Anchorsocial = styled.a`
text-decoration:none;
color:rgb(248,248,251);
font-family: 'El Messiri', sans-serif;
margin-top:16px;
`
export const Registerinput = styled.input`
direction:rtl;
width:${props => props.small ? '220':'280'}px;
height:27px;
padding:6px 12px;
margin:6px 0;
&::placeholder{
    font-family: 'El Messiri', sans-serif;
}
@media(max-width:670px){
    width:75%;
}
`
export const Registerselect = styled.select`
direction:rtl;
width:${props => props.small ? '220':'280'}px;
height:43px;
padding:6px 18px;
margin:6px 16px;
font-family: 'El Messiri', sans-serif;
@media(max-width:670px){
    width:80%;
}

`
export const Textare= styled.textarea`
width:286px;
height:76;
padding:10px;
margin:4px auto;
&::placeholder{
    font-family: 'El Messiri', sans-serif;
}

`


export const Safinput = styled.input`
margin: 0 8px 16px 0 ;
background:rgb(10,183,255);
padding:6px 18px;
width:112px;
height:38px;
border-radius:2px;
border:1px solid white;
font-size:16px;
font-family:tajawal,sans-serif;
color:rgb(248,248,251)
`
export const ColumnSec = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-end;
margin:8px;
position:relative;


`
export const ArticleSec = styled.article`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
margin:8px
padding:15px;
`
export const Button = styled.button`
width:${props =>props.small ? '100':'300'}px;
height:${props =>props.small ? '45':'45'}px;;
padding:6px 12px;
margin:${props =>props.small ? '8px 12px 12px 12px':'8px 0 12px '};
background: rgb(10,183,255);
border:none;
color:white;
font-family: Almarai, sans-serif;
font-size:18px;
font-weight:600;
border-radius:20px;
&:hover{
    
    cursor:pointer;
    transition:.5s ease;
}
`