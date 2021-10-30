import styled from  'styled-components'


export const Header = styled.header`

`
export const Column = styled.div`
box-sizing:border-box;
display:flex;
padding:12px;
justify-content:space-around;
@media(max-width:690px){
    justify-content:space-between;
}
`
export let Logo = styled.div`
line-height:40px;
`
export let Phone = styled.div`
font-family: Teko, sans-serif;
font-size:28px;
@media(max-width:670px){
    display:none
}
`
export let Mail = styled.div`
font-size:28px;
font-family: 'Teko', sans-serif;
@media(max-width:670px){
    display:none
}

`
export let Divbutton = styled.div`

`

export const Nav = styled.nav`
width:90%;
margin:0 auto;

`
export const Unorderlist = styled.ul`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:row-reverse;
padding:0;
margin:32px auto;
@media(max-width:750px){
    flex-direction:column;
    width:100%;
}


`

export const List = styled.li`
list-style:none;
margin:12px auto;
@media(max-width:670px){
    text-align:end;
   width:100%;
border-bottom:1px solid rgb(191,214,48)
}

`
export const Anchor = styled.a`
text-decoration:none;
font-family: 'El Messiri', sans-serif;
font-weight:bold;
color:black;
&:hover{
    color:rgb(10,183,255)
}
`
export const Button = styled.button`
width:80px;
height:40px;
padding:10px 8px;
border:none;   
background: transparent;
outline:none;
font-size:24px;
`