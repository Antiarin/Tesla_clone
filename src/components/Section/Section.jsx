import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  description2,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>
            {description} {description2 && <u>{description2}</u>}
          </p>
        </ItemText>
      </Fade>

      <Buttons>
        {rightBtnText ? (
          <ButtonGroup>
            <Fade left>
              <LeftButton>{leftBtnText}</LeftButton>
            </Fade>
            <Fade right>
              <RightButton>{rightBtnText}</RightButton>
            </Fade>
          </ButtonGroup>
        ) : (
          <Fade bottom>
            <LeftButton1>{leftBtnText}</LeftButton1>
          </Fade>
        )}

        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-size: cover;/* defines size of the background image*/
  background-position: center; /*defines positon of the image*/
  background-repeat: no-repeat; /*The background-repeat property sets if/how a background image will be repeated*/
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical-->>> usually it is for horizontal but as we used flex direction =column
  align-items: center; //horizontal-->>> usually it is for vertical but as we used flex direction =column
  background-image: ${(props) =>`url(${props.bgImage})`}; // syntax for using props in styled components
`;
const ItemText = styled.div`
  margin-top: 15vh;
  text-align: center;
  margin-bottom: 30px;
  > h1 {
    font-size: 40px;
  }
  u { // no need of >p>u
    cursor: pointer;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 25px;
  @media (max-width: 635px) {
    flex-direction: column;
  } ;
`;
const LeftButton = styled.button`
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
     border:none;
     outline:none;
     box-shadow:none;
     font-weight:556;
     cursor:pointer;
     margin:10px;
     transition: all 100ms ;
     &:hover{
           background-color: rgb(0 0 0 / 80%);
            border:2px solid white;
         }
     }
     @media(max-width:635px) {
        width:87vw;
     
    }
`;
const RightButton = styled(LeftButton)`
  /*Inhereting lefts button css */
  color: #393c41; //still apply css here
  background-color: white;
  &:hover {
    background: white;
    border: 2px solid black;
    color: black;
  }
`;
const LeftButton1 = styled(LeftButton)`
  &:hover {
    background-color: rgb(0 0 0 / 80%);
    border: 2px solid black;
  }
`;
const DownArrow = styled.img`
  //

  margin-top: 10px;
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
