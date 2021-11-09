import React, {useState} from "react"
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
    const [burgerStatus,setBurgerStatus]=useState(false);
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt='' />  { /* image src in html differs from css: css uses url whereas html uses src*/}
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a> 
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panel</a>

            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav open={burgerStatus}>
                <CloseWrapper> {/* Closing it in a different div to shift it to the right b y using display flex, if you wanna align something wrap it*/}
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panels</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#"> Used Inventory</a></li>
                <li><a href="#"> Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#"> Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#"> Support</a></li>
                <li><a href="#"> Investor Relations</a></li>
                <li><a href="#"> Shop</a></li>
                <li><a href="#"> Account</a></li>

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
     padding:0 20px;
     top:0;     
     left:0;
     right:0;
     z-index:1; // z-index is added here cause it competes with the container division of header which is fixed.
`
const Menu = styled.div`
     display:flex;
     align-items:center;
     justify-content:center;
     flex:1;

     a{
         font-weight:600;
         text-transform:uppercase;
         padding:0 10px;
         flex-wrap:nowrap;

     }
     @media(max-width:1161px){
         display:none;
     }
`
const RightMenu = styled.div`
     display:flex;
     align-items:center;
     a{
         font-weight:600;
         text-transform:uppercase;
                  
         margin-right:10px;
         @media(max-width:1161px){
             display:none;
         }
     
     }
     
     
    
`
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
    width:40px;
    
    
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
        border-box:inset 0 0 10px black;
    }
    

     // justify-content:flex-start; learn about it

     
     transform:${props=>props.open? 'translateX(0)':'translateX(100%)'};
     transition: transform .35s ease-in-out;
     li{
         padding:15px 0;
         border-bottom:1px solid rgba(0,0,0,.2);
     }

     
`

const CustomClose= styled(CloseIcon)`
      cursor:pointer;
      width:40px;
      
     
`
const CloseWrapper= styled.div`
     display:flex;
     justify-content:flex-end;

`