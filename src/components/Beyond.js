import React from 'react';
import styled from 'styled-components';

const Display = () => {
    if (window.innerWidth >= 820) {
        return (
            <OrderButton>
                order now
            </OrderButton>

        )

    }
    else {
        return (
            <Wrap2>
                <Right>
                    <Righttxt>
                        <p>Plaid</p>
                        <h1>Beyond Ludicrous</h1>
                    </Righttxt>


                </Right>
                <Left>
                    <p>With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. Both Long Range and Plaid powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs.</p>
                </Left>
                <OrderButton>
                    order now
                </OrderButton>

            </Wrap2>
        )

    }
};

function Beyond() {
    return (
        <Container>

            <Wrap>
                <Box>

                    <Text1>
                        <h1>1020hp</h1>
                        <p>Peak power</p>


                    </Text1>
                    <Text2>
                        <h1>9.23s</h1>
                        <p>@155 mph 1/4 mile</p>
                    </Text2>
                    <Text3>
                        <h1>1.99s</h1>
                        <p>0-60 mph*</p>
                    </Text3>
                </Box>

            </Wrap>
            <Wrap2>
                <Right>
                    <Righttxt>
                        <p>Plaid</p>
                        <h1>Beyond Ludicrous</h1>


                    </Righttxt>

                </Right>
                <Left>
                    <p>With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. Both Long Range and Plaid powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs.</p>
                </Left>
                <OrderButton>
                    order now
                </OrderButton>


            </Wrap2>
        </Container>
    )
}
export default Beyond
const Container = styled.div`
     width:100vw;
     height:100vh;
    

`

const Wrap = styled.div`
     width:100vw;
     height:65vh;
     background-image: url('/images/model-sblue.jpg');
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     display:flex;
     align-items:flex-end;
     justify-content: center;
     

`
const Box = styled.div`
     width:100%;
     height:30vh;
     
     display: flex;
     justify-content: center;
     

     `
const Text1 = styled.div`
     h1{
         color: white;
         font-weight:550;
         margin-bottom:2px;
         letter-spacing:3px;
         font-size:28px;
     }
     p{
         color:white;
         font-weight: 400;
     }
     display:flex;
     flex-direction:column;
     justify-content: center;
     align-items:center;
     
     margin:5vw 5vw 0 5vw;

`
const Text2 = styled(Text1)``
const Text3 = styled(Text1)``



const Wrap2 = styled.div`
     width:100vw;
     height:35vh;
     display:grid;
     justify-content:center;
     align-items:center;
     @media(max-width:820px){
         flex-direction:column;
         justify-content:center;
         align-items:center;
     }
     


`
const Right = styled.div`
      
      flex:30;
      min-width:280px;
      

      height:auto;
      display:flex;
      flex-direction:column;
      align-items:flex-end;
      justify-content:center;
      @media(max-width:820px){
        padding:0;
        height:auto;
        width:100%;
    }
      
      

`
const Righttxt = styled.div`
      
      height:auto;
      
     
      display:flex;
      flex-direction:column;

      justify-content:center;
      p{
          font-size:20px;
          margin-bottom:2px;
      }
      h1{
          font-size:30px;
          
      }
      @media(max-width:820px){
        padding:0;
        height:auto;
        width:100%;
    }

`

const OrderButton = styled.div`
      
      
      width:160px;
      height:40px;
      font-size:13px;
      align-self: flex-start;
      text-transform:uppercase;
      font-weight:bold;
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius:100px;
      border:3px solid black;
      cursor:pointer;
      &:hover{
          background-color:black;
          color:white;
      }
      margin-top:17px;
      @media(max-width:820px){
        padding:0;
        width:87vw;
    }
`
const Left = styled.div`
      flex:60;
      
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      padding:3vw;
      p{
         font-size:18px;
      }
      @media(max-width:820px){
        padding:0;
        height:auto;
        width:100%;
    }

`