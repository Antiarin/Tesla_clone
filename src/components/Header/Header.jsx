import React, { useState } from "react"
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"


// 1421 media query


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <StyledLink to="/" >
                <img src='/images/logo.svg' alt='' />  { /* image src in html differs from css: css uses url whereas html uses src*/}
            </StyledLink>
            <Menu>
                <ul>
                    <li className="one"><Styled1Link to="/models">Model S</Styled1Link></li>
                    <li className="two"><Styled1Link to="/models">Model 3</Styled1Link></li>
                    <li className="three"><Styled1Link to="/models">Model X</Styled1Link></li>
                    <li className="four"><Styled1Link to="/models">Model Y</Styled1Link> </li>
                    <li className="five"><Styled1Link to="/models">Solar Roof</Styled1Link></li>
                    <li className="six"><Styled1Link to="/models">Solar Panel</Styled1Link></li>
                    <hr />
                </ul>
            </Menu>
            <RightMenu>
                <ul>
                    <li className="one"><Styled3Link to="#">Shop</Styled3Link></li>
                    <li className="two"><Styled3Link to="/login"> Account</Styled3Link></li>
                    <li className="three" onClick={() => setBurgerStatus(true)}>Menu</li>
                    <hr className="hr"/>
                </ul>
            </RightMenu>
            <BurgerNav open={burgerStatus}>
                <CloseWrapper> {/* Closing it in a different div to shift it to the right b y using display flex, if you wanna align something wrap it*/}
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>

                <li><Styled2Link to="#">Model S</Styled2Link></li>
                <li><Styled2Link to="#">Model 3</Styled2Link></li>
                <li><Styled2Link to="#">Model X</Styled2Link></li>
                <li><Styled2Link to="#">Model Y</Styled2Link></li>
                <li><Styled2Link to="#">Solar Roof</Styled2Link></li>
                <li><Styled2Link to="#">Solar Panels</Styled2Link></li>
                <li><Styled2Link to="#">Existing Inventory</Styled2Link></li>
                <li><Styled2Link to="#"> Used Inventory</Styled2Link></li>
                <li><Styled2Link to="#"> Trade-In</Styled2Link></li>
                <li><Styled2Link to="#">Test Drive</Styled2Link></li>
                <li><Styled2Link to="#"> Powerwall</Styled2Link></li>
                <li><Styled2Link to="#">Commercial Energy</Styled2Link></li>
                <li><Styled2Link to="#">Utilities</Styled2Link></li>
                <li><Styled2Link to="#">Charging</Styled2Link></li>
                <li><Styled2Link to="#">Find Us</Styled2Link></li>
                <li><Styled2Link to="#"> Support</Styled2Link></li>
                <li><Styled2Link to="#"> Investor Relations</Styled2Link></li>
                <li><Styled2Link to="#"> Shop</Styled2Link></li>
                <li><Styled2Link to="#"> Account</Styled2Link></li>

            </BurgerNav>
        </Container>
    )
}
export default Header
const Container = styled.div`
     width:100vw;
     min-height:60px;     
     position:fixed;
     display:flex;
     align-items:center;
     justify-content:space-between;
     padding:0 1vw;
     
     top:0;     
     left:0;
     right:0;
     z-index:1; // z-index is added here cause it competes with the container division of header which is fixed.
    //  Link{
    //      display:flex;
    //      align-itmes:center;
    //      justify-content:center;
    //      width:15vw;
    //      height:20px;
    //      margin:0 10px;
    //  }
`
const StyledLink = styled(Link)`
     display:flex;
     align-itmes:center;
     justify-content:center;
         height:20px;
    //  margin:0 -20px;
`

const Menu = styled.div`
     display:flex;
     width:50vw;
     justify-content:center;
     align-items:center;
     height:100%
     min-height:60px;
     padding-bottom:20px;
     ul{        
        width:100%;
        height:100%; 
    }
      li{
         list-style:none;
         margin:0;
         margin-bottom:25px;
         width:16%;
         display:inline-flex;         
         text-align:center;
         cursor:pointer;
     }
    hr{
          height:30px;
          width:16%;
          margin:-50px 0;
          border:none;        
          transition:.3s ease-in-out;
        //   @media(max-width:1418px){
        //       margin:-68px 0;
        //   }
     }
     .one:hover~hr{
        box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
        border:none;
        border-radius:10px;         
     }
     .two:hover~hr{
        box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
        border:none;
        border-radius:10px;
         margin-left:16%;
     }
     .three:hover~hr{
        box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
        border:none;
        border-radius:10px;
        margin-left:32%;
    }
    .four:hover~hr{
        box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
        border:none;
        border-radius:10px;
        margin-left:48%;
    }
    .five:hover~hr{
        box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
        border:none;
        border-radius:10px;
        margin-left:64%;
        // @media(max-width:1418px){
        //     height:45px;
            
        // }
    }
    .six:hover~hr{
        box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
        border:none;
        border-radius:10px;
        margin-left:80%;
        // @media(max-width:1418px){
        //     height:45px;
            
        // }
    }
     
     @media(max-width:1161px){
         display:none;
     }
     `
const Styled1Link = styled(Link)`
     display:inline-block;
     font-weight:545;
     font-size:16px;
     color:black;
     text-align:center;
     text-transform:none;
     letter-spacing:.5px;
     padding:0,10px; 
     margin-top:0;        
     flex-wrap:nowrap;
     width:100%;
     
    //  @media(max-width:1161px){
    //      display:none;
    //  }
     
     `
const RightMenu = styled.div`
     display:flex;
     align-items:center;
     flex-wrap:nowrap;
     width:200px;
     margin-right:10px;
     justify-content:center;
     height:100%
     min-height:60px;
     padding-bottom:20px;
    ul{
         width:100%;
         height:100%; 
     li{
        list-style:none;
        margin:0;
        margin-bottom:25px;
        width:33%;
        display:inline-flex;         
        text-align:center;
        justify-content: center;
        align-items: center;
         cursor:pointer;
         font-weight:545;
         color:black;
         text-transform:none;
         letter-spacing:.5px;
     }
     .hr{
            height:30px;
            width:33%;
             margin:-50px 0;
             border:none;        
            transition:.3s ease-in-out;
        }
       .one:hover~.hr{
          box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
          border:none;
          border-radius:10px;
           
       }
       .two:hover~.hr{
          box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
          border:none;
          border-radius:10px;
           margin-left:33%;
       }
       .three:hover~.hr{
          box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
          border:none;
          border-radius:10px;
          margin-left:66%;
        }

    }
   
@media(max-width:1161px){
    justify-content:flex-end;

}
`
const Styled3Link=styled(Link)`
     display:inline-block;
     font-weight:545;
     font-size:16px;
     color:black;
     text-align:center;
     text-transform:none;
     letter-spacing:.5px;
     padding:0,10px; 
     margin-top:0;        
     flex-wrap:nowrap;
     width:100%;
`


const CustomMenu = styled.div`
    cursor:pointer;
    width:35px;
    font-weight:550;
    text-transform:uppercase;
    margin-right:20px;
    
    
    
    
`
const BurgerNav = styled.div`
     position:fixed;
     top:0;
     bottom:0;
     right:0;
     background:white;
     width:300px;
     z-index:10;      //Z Index (z-index) is a CSS property that defines the order of overlapping HTML elements. Elements with a higher index will be placed on top of elements with a lower index.
     list-style:none;
     padding:20px;
     display:flex;
     flex-direction:column;
     text-align:start;
     overflow:auto;
     overflow-x:hidden;
     
     &::-webkit-scrollbar {
        display:none;
        // border-box:inset 0 0 10px black;
    }
    

     // justify-content:flex-start; learn about it

     
     transform:${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
     transition: transform .35s ease-in-out;
     li{
         padding:15px 0;
         border-bottom:1px solid rgba(0,0,0,.2);
     }
     @media(max-width:430px){
          width:60vw;
      }

     
`
const Styled2Link = styled(Link)`
display:inline-block;
font-weight:545;
font-size:16px;
color:black;
text-align:start;
text-transform:none;
letter-spacing:.5px;
padding:0,10px; 
margin-top:0;        
flex-wrap:nowrap;
width:100%;

`

const CustomClose = styled(CloseIcon)`
      cursor:pointer;
      width:40px;
      
     
`
const CloseWrapper = styled.div`
     display:flex;
     justify-content:flex-end;

`