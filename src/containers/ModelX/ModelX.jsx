import React, { useEffect } from 'react'
import styled from 'styled-components'
import Beyond from '../../components/Carcomponent/Beyond/Beyond';
import Interior from '../../components/Carcomponent/Interior/Interior';
import Hero from '../../components/Hero/Hero';
import Model_X from "../../images/model-x-main.png"
function ModelX() {
    useEffect(() =>{
        window.scrollTo(0,0)

    });
    return (
        <Container>
            <Hero CarName="Model X" backgroundImg={Model_X} Plaid={true} color="black"/>
            <Interior/>
            <Beyond/>
        </Container>
    )
}

export default ModelX;

const Container= styled.div`

`