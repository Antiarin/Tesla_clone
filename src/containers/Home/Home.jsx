import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { HOME_DATA } from "../../Helpers/Homedata";

function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Container>
        {/* Container can be named whatever we want in Styled- components*/}
        <HeaderContainer>
          <Header fontcolor="black" />
        </HeaderContainer>
        {HOME_DATA.map((data, index) => (
          <Section
            key={index}
            title={data.name}
            backgroundImg={data.img}
            description={data.description}
            description2={data.description2}
            leftBtnText={data.leftBtnText}
            rightBtnText={data.rightBtnText}
          />
        ))}
      </Container>
    </>
  );
}
export default Home;
const HeaderContainer = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 10;
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;
