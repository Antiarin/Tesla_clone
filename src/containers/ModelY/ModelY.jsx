import React, { useEffect } from 'react'
import styled from 'styled-components'
import Beyond from '../../components/Carcomponent/Beyond/Beyond';
import Interior from '../../components/Carcomponent/Interior/Interior';
import Hero from '../../components/Hero/Hero';
import Model_Y from "../../images/model-y-main.png"
function ModelY() {
    useEffect(() =>{
        window.scrollTo(0,0)

    });
    return (
        <Container>
            <Hero CarName="Model Y" backgroundImg={Model_Y} Plaid={false} color="white" />
            <Interior/>
            <Beyond/>
        </Container>
    )
}

export default ModelY;

const Container= styled.div`

`