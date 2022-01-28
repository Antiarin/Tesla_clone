import React, { useEffect } from 'react'
import styled from 'styled-components'
import Beyond from '../../components/Carcomponent/Beyond/Beyond';
import Interior from '../../components/Carcomponent/Interior/Interior';
import Hero from '../../components/Hero/Hero';

function SolarRoof() {
    useEffect(() =>{
        window.scrollTo(0,0)

    });
    return (
        <Container>
            <Hero CarName="Solar Roof" backgroundImg="https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/solaroof.png?alt=media&token=8d0617c4-f8eb-4cea-9809-64b3e397ae8b" Plaid={false} color="black"/>
            <Interior/>
            <Beyond/>
        </Container>
    )
}

export default SolarRoof;

const Container= styled.div`

`