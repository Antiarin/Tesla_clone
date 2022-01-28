import React, { useEffect } from 'react'
import styled from 'styled-components'
import Beyond from '../../components/Carcomponent/Beyond/Beyond';
import Interior from '../../components/Carcomponent/Interior/Interior';
import Hero from '../../components/Hero/Hero';
function ModelX() {
    useEffect(() =>{
        window.scrollTo(0,0)

    });
    return (
        <Container>
            <Hero CarName="Model X" backgroundImg="https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/model-x-main.png?alt=media&token=9a5b1daa-91d4-45b7-96c7-58a56724c156"Plaid={true} color="black"/>
            <Interior/>
            <Beyond/>
        </Container>
    )
}

export default ModelX;

const Container= styled.div`

`