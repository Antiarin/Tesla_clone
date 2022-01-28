import React from 'react';
import styled from "styled-components";

function Electric() {
    return (
        <Wrapper>
            <Divtop>

            </Divtop>
            <Divmiddle>
                <Mid src="./images/Model-S-Performance-Tri-Motor-Desktop.jpg"/>
            </Divmiddle>

            <Divbottom>
            </Divbottom>

        </Wrapper>

    )
}
export default Electric
const Wrapper = styled.div`
     width:100vw;
     height:100vh;
     display:flex;
     flex-direction:column;


`
const Divtop=styled.div`
     flex:2.3;
     border:1px black solid;
`
const Divmiddle=styled.div`
     flex:5.4;
     width:100%;
     display:flex;
     align-items:center;
     justify-content:center;
     
`
const Mid=styled.img`
     width:65vw;
     height:auto;
`
const Divbottom=styled.div`
     flex:2.3;
     border:1px black solid;
`

