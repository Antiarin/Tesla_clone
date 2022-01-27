import React from 'react'
import styled from 'styled-components';

function Blue() {
    return (
       
        <Wrap>
        <Text1>
            <h1>1020hp</h1>
            <p>Peak power</p>

        </Text1>
        <Text2>
            <h1>9.23s</h1>
            <p>@155 mph 1/4 mile</p>
        </Text2>
        <Text3>
            <h1>1.99s</h1>
            <p>0-60 mph*</p>
        </Text3>

    </Wrap>
    )
}

export default Blue
const Wrap = styled.div`
     width:100vw;
     height:100vh;
     background-image: url('./images/model-sblue.jpg');
     background-repeat: no-repeat;
     background-position:center;
     background-size:cover;
     display:flex;
     align-items:flex-end;
     justify-content: center;

`

const Text1 = styled.div`
`
const Text2 = styled(Text1)``
const Text3 = styled(Text1)``

