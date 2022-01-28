import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import Header from "../Header/Header";
function Hero({ CarName, Plaid, backgroundImg, color }) {
  return (
    <Container bgImage={backgroundImg} textcolor={color}>
      <Header fontcolor={color} />
      <Fade bottom>
        <ItemText textcolor={color}>
          <h1>{CarName} </h1>
          {Plaid && <p> Plaid</p>}
        </ItemText>
      </Fade>
      <Wrap>
          <BottomText>
            <Fade bottom>
            <Text1>
              <h2>396mi</h2>
              <p> Range (EPA est.) </p>
            </Text1>
            </Fade>
            <Fade bottom>
            <Text2>
              <h2>1.99s</h2>
              <p>0-60 mph*</p>
            </Text2></Fade>
            <Fade bottom>
            <Text3>
              <h2>200mph</h2>
              <p>Top Speed</p>
            </Text3>
            </Fade>
            <Fade bottom>
            <Text4>
              <h2>1020hp</h2>
              <p>Peak Power</p>
            </Text4>
            </Fade>
            <Button>order now</Button>
            
          </BottomText>
          <DownArrow src="/images/down-arrow.svg" />
        </Wrap>
      
    </Container>
  );
}
export default Hero;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bgImage})`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => `${props.textcolor}`};
`;
const ItemText = styled.div`
  text-align: center;
  justify-content: center;
  margin-top: 15vh;
  color: ${(props) => `${props.textcolor}`};
  h1 {
    font-size: 40px;
    text-spacing: 1px;
    color: inherit;
  }
  p {
    color: inherit;
    font-size: 17px;
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 60vh;
  @media (max-height: 1100px) {
    margin-top: 55vh;
  }
  @media (max-height: 900px) {
    margin-top: 48vh;
  }
  @media (max-height: 700px) {
    margin-top: 40vh;
  }
  @media (max-height: 595px) {
    margin-top: 30vh;
  }
  @media (max-height: 485px) {
    margin-top: 20vh;
  }
`;
const BottomText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  @media (max-width: 900px) {
    width: 70%;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media (max-width: 500px) {
    width: 80%;
  }

  @media (max-width: 365px) {
    width: 95%;
  }
`;
const Text1 = styled.div`
  width: fit-content;
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: white;
    font-weight: 550;
    font-size: clamp(20px, 1.866vw + 0.01em, 28px);
  }
  p {
    color: white;
    font-size: 12px;
    font-weight: 549;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text2 = styled(Text1)``;
const Text3 = styled(Text1)``;
const Text4 = styled(Text1)`
  @media (max-width: 550px) {
    display: none;
  }
`;
const Button = styled.button`
  height: 40px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-weight: 549;
  text-transform: uppercase;
  border-radius: 100px;
  cursor: pointer;
  border: 2px solid white;
  transition: all 0.2s ease;
  outline: none;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 20px;
  }
  &:hover {
    background-color: white;
    color: black;
  }
`;
const DownArrow = styled.img`
  height: 40px;
  margin-top: 10px;
  width: 40px;
  margin-bottom: 20px;
  animation: animateDown infinite 1.5s;
`;
