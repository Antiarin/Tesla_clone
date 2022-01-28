import React, { useEffect } from 'react'
import styled from 'styled-components'
import Beyond from '../../components/Carcomponent/Beyond/Beyond';
import Interior from '../../components/Carcomponent/Interior/Interior';
import Hero from '../../components/Hero/Hero';

function SolarPanel() {
    useEffect(() =>{
        window.scrollTo(0,0)

    });
    return (
        <Container>
            <Hero CarName="Solar Panel" backgroundImg="https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/solarroof.png?alt=media&token=afd7f0ca-a31f-4447-9ff0-da04c80af885" Plaid={false} color="white"/>
            <Interior/>
            <Beyond/>
        </Container>
    )
}

export default SolarPanel;

const Container= styled.div`

`