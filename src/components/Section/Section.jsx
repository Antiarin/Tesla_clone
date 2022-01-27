import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title, description, description2, backgroundImg, leftBtnText, rightBtnText}) {
   
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description} {description2&&<u>{description2}</u>}</p>

            </ItemText>
            </Fade>
            
            <Buttons>
                
                
                <ButtonGroup>
                    <Fade left>
                    {leftBtnText&&
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    }
                    </Fade>
                    <Fade right>
                    {rightBtnText&&
                         
                        <RightButton>
                        {rightBtnText}
                        </RightButton> 
                    
                    }
                    </Fade>

                    
                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg" />

           </Buttons>
           
        </Wrap>

    )
}

export default Section
const Wrap= styled.div`
     
     width:100%;
     height:100vh;
     margin:0;
     background-size:cover;              {/* defines size of the background image*/}
     background-position:center;         /*defines positon of the image*/
     background-repeat:no-repeat;       /*The background-repeat property sets if/how a background image will be repeated*/
     
     display:flex;
     flex-direction:column;
     justify-content:space-between;       // vertical-->>> usually it is for horizontal but as we used flex direction =column
     align-items:center;                 //horizontal-->>> usually it is for vertical but as we used flex direction =column
     background-image:${props =>`url("./images/${props.bgImage}")`}; // syntax for using props in styled components
     
     
`
const ItemText=styled.div`
     padding-top:15vh;
     text-align:center;
     margin-bottom:30px;
     >h1{
        font-size:40px;}
     u{                             // no need of >p>u
         cursor:pointer;
     }

`


const ButtonGroup=styled.div`
     display: flex;
     margin-bottom:25px;
     @media(max-width:635px){
         flex-direction:column;
     };
`
const LeftButton=styled.div`
     background-color: rgba(23, 26, 32, 0.8);
     height:40px;
     width:256px;
     color:white;
     display:flex;
     justify-content:center;
     align-items:center;
     border-radius:100px;
     opacity:0.85;
     text-transform:uppercase;
     font-size:12px;
     font-weight:556;
     cursor:pointer;
     margin:10px;
     @media(max-width:635px) {
        width:87vw;
     
    }
`
const RightButton=styled(LeftButton)` /*Inhereting lefts button css */
     color:#393c41;                    //still apply css here
     background-color:white;
`          
const DownArrow=styled.img` // 
     
     margin-top:10px;
     width:40px;
     
     
     height:40px;
     
     margin-bottom:20px;
     
     animation:animateDown infinite 1.5s;
     
     

`
const Buttons=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`