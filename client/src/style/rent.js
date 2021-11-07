import styled from "styled-components";


export const Section = styled.section`
background:red
`
export const Ul =styled.ul`
padding:0;
margin:0`

export const H1 = styled.h1`
text-align:end;
font-family: 'El Messiri', sans-serif;
`
export const P = styled.p`
font-family: 'El Messiri', sans-serif;
text-align:end;
`
export const List = styled.li`
list-style:none;
display:flex;
justify-content:flex-end;
text-align:end;
margin:8px 0;

`

export const Sectionimg = styled.section `
width:370px;
height:450px;
@media(max-width:670px){
    width:88%;
    height:350px;
    margin:0 0 0 auto;
    position:relative;


}

`
export const Option = styled.option`
font-family: 'Almarai', sans-serif;


`

export const Icon = styled.i`
font-size:28px;
margin: 0 8px;
color:rgb(10,183,255);
text-aling:end;
`
export const Span = styled.span`
font-family: 'Almarai', sans-serif;
`
export const Form =styled.form`

display:flex;
flex-direction:row;
align-items:center;
margin-left:auto;
background:black;
flex-wrap:wrap;
@media(max-width:670px){
    flex-direction:column-reverse;
    margin-left:0;
    
}
`