import React, { useEffect } from "react";
import styled from "styled-components";
import Model_S from "../../images/model-s.jpg";
import Hero from "../../components/Hero/Hero";
import Interior from "../../components/Carcomponent/Interior/Interior";
import Beyond from "../../components/Carcomponent/Beyond/Beyond";
function ModelS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <Hero CarName="Model S" backgroundImg={Model_S} Plaid={true} color="black" />
      <Interior />
      <Beyond />
    </Container>
  );
}

export default ModelS;

const Container = styled.div``;
