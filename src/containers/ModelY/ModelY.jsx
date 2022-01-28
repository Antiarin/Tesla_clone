import React, { useEffect } from 'react'
import styled from 'styled-components'
import Beyond from '../../components/Carcomponent/Beyond/Beyond';
import Interior from '../../components/Carcomponent/Interior/Interior';
import Hero from '../../components/Hero/Hero';
function ModelY() {
    useEffect(() =>{
        window.scrollTo(0,0)

    });
    return (
        <Container>
            <Hero CarName="Model Y" backgroundImg="https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/model-y-main.png?alt=media&token=d42899c7-993e-4222-aded-1694b2314be0" Plaid={false} color="white" />
            <Interior/>
            <Beyond/>
        </Container>
    )
}

export default ModelY;

const Container= styled.div`

`