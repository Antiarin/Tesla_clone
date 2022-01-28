import React, { useEffect } from "react";
import styled from "styled-components";
import Hero from "../../components/Hero/Hero";
import Interior from "../../components/Carcomponent/Interior/Interior";
import Beyond from "../../components/Carcomponent/Beyond/Beyond";
function ModelS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <Hero CarName="Model S" backgroundImg="https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/model-sblack.jpg?alt=media&token=79035e10-4974-4e33-89ac-c708d1286ff4" Plaid={true} color="white" />
      <Interior />
      <Beyond />
    </Container>
  );
}

export default ModelS;

const Container = styled.div``;
