import React from "react";
import styled from 'styled-components';
import Header from "../Header/Header";
function SectionCar() {
    return (
        <Container>
            <Header/>
            <ItemText>
                <h1>Model S </h1>
                <p> Plaid</p>
            </ItemText>
            <Wrap>
                <BottomText>
                    <Text1>
                        <h2>396mi</h2>
                        <p> Range (EPA est.) </p>

                    </Text1>
                    <Text2>
                        <h2>1.99s</h2>
                        <p>0-60 mph*</p>

                    </Text2>
                    <Text3>
                        <h2>200mph</h2>
                        <p>Top Speed</p>

                    </Text3>
                    <Text4>
                        <h2>1020hp</h2>
                        <p>Peak Power</p>
                    </Text4>
                    <Button>
                        order now
                    </Button>

                </BottomText>
                <DownArrow src="/images/down-arrow.svg" />
            </Wrap>
        </Container>
       
    )
}
export default SectionCar
const Container = styled.div`
     width:100vw;
     height:100vh;
     background-size:cover;
     background-position:center;
     background-repeat:no-repeat;
     background-image:url('./images/model-s.jpg');
     display:flex;
     flex-direction:column;
     justify-content:space-between;
     align-items:center;


`
const ItemText = styled.div`
      text-align:center;
      
      
      justify-content:center;
      padding-top:15vh;
      h1{
          font-size:40px;  
          text-spacing:1px; 
                 
      }
      

`
const Wrap = styled.div`
      align-items:center;
      display:flex;
      flex-direction:column;
      justify-content:center;
`
const BottomText = styled.div`

      display:flex;
      align-items:center;
      justify-content:space-evenly;
      margin-bottom:25px;
      


`
const Text1 = styled.div`
     width:170px;
     h2{
         color:white;
         font-weight:550;
         font-size:28px;

     }
     p{
         color:white;
         font-size:12px;
         font-weight:549;
     }  
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center; 
`
const Text2 = styled(Text1)``
const Text3 = styled(Text1)``
const Text4 = styled(Text1)``
const Button = styled.div`
     
     height:40px;
     width:150px;     
     display:flex;
     align-items:center;
     justify-content:center;
     background-color:transparent;
     color:white;
     font-size:14px;
     font-weight:549;
     text-transform:uppercase;
     border-radius:100px;
     cursor:pointer;
     border:2px solid white;
     &:hover{
         background-color:white;
         color:black;
     }
     
`
const DownArrow = styled.img`
      height:40px;
      margin-top:10px;
      width:40px;
      margin-bottom:20px;
      animation:animateDown infinite 1.5s;

`

