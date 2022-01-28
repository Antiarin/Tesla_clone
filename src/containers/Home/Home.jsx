import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";

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
        <Section
          title="Model S"
          description="Order online for "
          description2="Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model Y"
          description="Order online for "
          description2="Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          description="Order online for "
          description2="Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          description="Order online for "
          description2="Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Accessories"
          description="Lowest Cost Solar Panels in America"
          backgroundImg="accessories.jpg"
          leftBtnText="Shop Now"
        />
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
