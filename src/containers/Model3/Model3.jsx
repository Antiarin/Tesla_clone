import React, { useEffect } from 'react'
import styled from 'styled-components'
import Hero from '../../components/Hero/Hero';
import Model_3 from "../../images/model-3-main.png"
import Beyond from '../../components/Carcomponent/Beyond/Beyond';
import Interior from '../../components/Carcomponent/Interior/Interior';
function Model3() {
    useEffect(() =>{
        window.scrollTo(0,0)

    });
    return (
        <Container>
            <Hero CarName="Model 3" backgroundImg={Model_3} Plaid={false} color="white"/>
            <Interior/>
            <Beyond/>
        </Container>
    )
}

export default Model3

const Container= styled.div`

`