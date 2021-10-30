import styled from 'styled-components'


export const Containerdiv = styled.div`
display:flex;
width:96vw;

background:rgb(16,30,40);
min-height:320px;
margin:32px auto;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
padding:0 0 62px 220px;
border-top-right-radius:30px;
border-bottom-left-radius:30px;

@media(max-width:670px){
    flex-direction:column;
    padding:0;
    

  
}

`
export const Childiv=styled.div`
flex-basis:330px;
height:330px;
margin:32px auto;

@media(max-width:670px){
    width:220px;
    height:220px;
    flex-basis:auto;
    margin:8px auto;
}

`
export const Buttondiv =styled.div`
position:relative;
bottom:-220px;
left:-10px;
@media(max-width:670px){
    bottom:auto;
    left:auto;
}
`
export const Arrowbtn = styled.button`

border:none;
outline:none;
width:80px;
hieght:20px;
color:rgb(172,173,177);
font-size:26px;


&:hover{
    transform:scale(1.2);
    
    transition:0.4s transform ease;
}

`