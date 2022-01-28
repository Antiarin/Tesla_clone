import React from 'react'
import ButtonPrimary from '../../../components/Buttons/Primary/ButtonPrimary'
import ButtonSecondary from '../../../components/Buttons/Secondary/ButtonSecondary'
import styled from "styled-components"
import './AccountCar.css'

function AccountCar({ imgSrc, model, testDrive }) {
    return (
        <Car bgImage={imgSrc} >
             <div className='car__model'>
                 <h2 >{model}</h2>
                 <div className='car__actions'>
                      <ButtonPrimary name='Order' />
                      {testDrive && <ButtonSecondary name='Test Drive' />}
                 </div>
                 <p className='car__info'>
                     <span>Request a Call</span> to speak with a product specialist, value
                     your trade-in or apply for leasing
                 </p>
            </div>

        </Car>
    )
}

export default AccountCar

const Car=styled.div`
     background-image:${props=>`url(${props.bgImage})`};
     display: grid;     
     place-items: center;
     background-size:contain;
     width:100vw; 
     height:auto;
     background-repeat:no-repeat;
     background-position: center;
    
     `
