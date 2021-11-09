import React from "react"
import styled from "styled-components"
import Beyond from "./Beyond"
import CarInterior from "./CarInterior"
import Section from "./Section"
import SectionCar from "./SectionCar"
import Electric from "./Electric.js"


function Home(){
    return(
        <Container>         {/* Container can be named whatever we want in Styled- components*/
        }  
           <SectionCar/> 
           <CarInterior/> 
           <Beyond/>  
           <Electric/>       
           <Section
                 title="Model S"
                 description="Order online for " 
                 description2="Touchless Delivery"
                 backgroundImg="model-s.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing Inventory"
            />
           <Section
                 title="Model Y"
                 description="Order online for "
                 description2="Touchless Delivery"
                 backgroundImg="model-y.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing Inventory"
            />
           <Section
                 title="Model 3"
                 description="Order online for "
                 description2="Touchless Delivery"
                 backgroundImg="model-3.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing Inventory"
            />
           <Section
                 title="Model X"
                 description="Order online for "
                 description2="Touchless Delivery"
                 backgroundImg="model-x.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing Inventory"
            />
            <Section
                 title="Solar Panels"
                 description="Lowest Cost Solar Panels in America"
                 backgroundImg="solar-panel.jpg"
                 leftBtnText="Order Now"
                 rightBtnText="Learn More"
            />
             <Section
                 title="Solar Roof"
                 description="Produce Clean Energy From Your Roof"
                 backgroundImg="solar-roof.jpg"
                 leftBtnText="Order Now"
                 rightBtnText="Learn More"
            />
             <Section
                 title="Accessories"
                 description="Lowest Cost Solar Panels in America"
                 backgroundImg="accessories.jpg"
                 leftBtnText="Shop Now"
                 
            />


          
        
        </Container>

    )
}
export default Home
const Container =styled.div`
       height:100vh;
       width:100vw;
       
`
