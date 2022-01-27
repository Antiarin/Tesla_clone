import React, { useEffect } from 'react'
import styled from 'styled-components'
import Blue from './Blue'
import SectionCar from './SectionCar'
import CarInterior from './CarInterior'
function HomeCar() {
    useEffect(() =>{
        window.scrollTo(0,0)

    });
    return (
        <Container>
            
            <SectionCar/>
            <CarInterior/>
            
            <Blue/>

        </Container>
    )
}

export default HomeCar

const Container= styled.div`

`