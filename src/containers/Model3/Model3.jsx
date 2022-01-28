import React, { useEffect } from 'react'
import styled from 'styled-components'
import Hero from '../../components/Hero/Hero';
import Beyond from '../../components/Carcomponent/Beyond/Beyond';
import Interior from '../../components/Carcomponent/Interior/Interior';
function Model3() {
    useEffect(() =>{
        window.scrollTo(0,0)

    });
    return (
        <Container>
            <Hero CarName="Model 3" backgroundImg="https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/model-3-main.png?alt=media&token=6f288745-1035-4dfa-b608-ac21242080f8" Plaid={false} color="white"/>
            <Interior/>
            <Beyond/>
        </Container>
    )
}

export default Model3

const Container= styled.div`

`