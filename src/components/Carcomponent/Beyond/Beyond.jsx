import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
function Beyond() {
  return (
    <>
      <Wrap bgImage="https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/modelsblack.png?alt=media&token=b9036e6b-b0d3-44bd-a67d-be651fb4f1cc">
        <Fade bottom>
          <Text1>
            <h4>1020hp</h4>
            <p>Peak power</p>
          </Text1>
          <Text2>
            <h4>9.23s</h4>
            <p>@155 mph 1/4 mile</p>
          </Text2>
          <Text3>
            <h4>1.99s</h4>
            <p>0-60 mph*</p>
          </Text3>
        </Fade>
      </Wrap>
      <Body>
        <Container1>
          <Fade left>
            <h3>Plaid</h3>
            <h1>Beyond Ludicrous</h1>
          </Fade>
        </Container1>
        <Container2>
          <Fade right>
            <p>
              With the longest range and quickest acceleration of any electric
              vehicle in production, Model S Plaid is the highest performing
              sedan ever built. All Model S powertrains, with updated battery
              architecture, are capable of back-to-back, consistent 1/4 mile
              runs.
            </p>
          </Fade>
        </Container2>
        <Button>
          <Fade left>
            <p>Order Now</p>
          </Fade>
        </Button>
      </Body>
    </>
  );
}

export default Beyond;
const Wrap = styled.div`
  width: 100vw;
  height: 70vh;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10%;
  padding: 0 0 55px 0;
`;
const Text1 = styled.div`
  width: fit-content;
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h4 {
    color: white;
    font-weight: 550;
    font-size: clamp(20px, 1.866vw + 0.01em, 28px);
  }
  p {
    color: white;
    font-size: 12px;
    font-weight: 549;
  }
`;
const Text2 = styled(Text1)``;
const Text3 = styled(Text1)``;
const Body = styled.div`
  width: 100vw;
  height: auto;
  background: white;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 50px;
  }
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
  }
`;

const Container1 = styled.div`
  grid-row: 1/2;
  grid-column: 2/4;
  h3 {
    font-size: 17px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 5px;
  }
  h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
  }
`;
const Container2 = styled.div`
  grid-row: 1/3;
  grid-column: 4/7;
  padding-right:80px;
  p {
    font-size: 14.5px;
    font-weight: 400;
    font-color:: rgb(57, 60, 65);
    text-align: start;
    line-height: 21px;
  }
  @media(max-width:1000px){
      padding-right:0;
  }
`;
const Button = styled.button`
  margin-top: 15px;
  grid-row: 2/3;
  grid-column: 2/3;
  border-radius: 50px;
  outline: none;
  border: 2px solid black;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  height: 40px;
  width: 250px;
  p {
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: black;
    height: 100%;
    text-transform: uppercase;
    width: 100%;
  }
  &:hover {
    background: black;
  }
  &:hover > p {
    border: 2px solid white;
    color: white;
    border-radius: 50px;
  }
  @media (max-width: 900px) {
    margin-top: 5px;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;
