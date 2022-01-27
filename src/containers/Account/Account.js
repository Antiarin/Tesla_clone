import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../../Helpers/cars'
import { BurgerNav_items } from '../../Helpers/cars'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase"
import { useSelector, useDispatch } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'

import CloseIcon from '@mui/icons-material/Close';
import AccountCar from './AccountCar/AccountCar'

function Account() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutofApp = () => {
        signOut(auth).then(() => {
            dispatch(logout())
            navigate('/')
            // Sign-out successful.
        }).catch((error) => {
            alert(error.message)
            console.log(error.message);
        });
    }
    const [burgerStatus, setBurgerStatus] = useState(false);


    return (
        <Container>

            <Container_header>
                <Header_logo>
                    <StyledLink to='/'>
                        <img
                            src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
                            alt='' />
                    </StyledLink>

                </Header_logo>
                <Menu>
                    <ul>
                        {PRODUCTS.map((data, index) => 
                                  data.id<=6 && (<li key={index} className={data.classname}> <StyledLink1 to={data.link}>{data.name}</StyledLink1></li>))}
                        <hr />
                    </ul>

                </Menu>
                <RightMenu>

                    <ul>
                    {PRODUCTS.map((data, index) => 
                                  data.id>6 && (<li key={index} className={data.classname}> <StyledLink1 to={data.link}>{data.name}</StyledLink1></li>))}
                        <li className="logout" onClick={logoutofApp}>Logout</li>
                        <li className="menu" onClick={() => setBurgerStatus(true)}>Menu</li>
                        <hr className="hr" />

                    </ul>

                </RightMenu>
                <BurgerNav open={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={() => setBurgerStatus(false)} />
                    </CloseWrapper>
                    {BurgerNav_items.map((data, index) => (
                        <li key={index}><StyledLink2 to={data.link}>{data.name}</StyledLink2></li>
                    ))}
                </BurgerNav>

            </Container_header>

            <Container_Body>
                <Account_person>
                    <Account__subheader>

                        <PersonLeft>
                            <h4>{user?.displayName + "'s"}</h4>
                        </PersonLeft>
                        <PersonRight>
                            <StyledLink3 to="/">Home</StyledLink3>
                            <StyledLink3 to="/">Account</StyledLink3>
                            <li onClick={logoutofApp}>Sign-out</li>
                        </PersonRight>
                    </Account__subheader>
                    <hr />
                </Account_person>

                <Cars>

                    <AccountCar
                        imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815'
                        model='Model S'
                        testDrive
                    />
                    <AccountCar
                        imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815'
                        model='Model S'
                        testDrive
                    />

                </Cars>
            </Container_Body>

        </Container>
    )
}

export default Account

const Container = styled.div`
     width:100vw;
     height:auto;
     
     `
const Container_header = styled.div`
     width:100vw;
     min-height:60px;
     display:flex;
     align-itmes:center;
     position:fixed;
     justify-content:space-between;  
     top:0;
     left:0;
     right:0;
     z-index:1;
     
     background:#222222;

`

const Header_logo = styled.div`
     display:flex;
     justify-content:center;
     align-items:center;
     object-fit:contain;
     `
const StyledLink = styled(Link)`
     display:flex;
     justify-content:center;
     align-items:center;
     img{
         filter: brightness(0) invert(1);
         height:12px;
        }   
 `
const Menu = styled.div`
     display:flex:
     align-items:center;
     justify-content:center;
     width:50vw;     
     padding-bottom:20px; 
    
    ul{
       width:100%;
       height:100%;
      
       padding-top:20px;
      
    }
    li{ 
        list-style:none;
        margin:0;
        margin-bottom:25px;
        width:16%;
        display:inline-flex;
        text-align:center;
        flex-wrap:nowrap;
     }
     hr{
        height:30px;
        width:16%;       
        margin:-50px 0;
        border:none;        
        transition:.3s ease-in-out; 
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
    margin-left:80%;}
   
    @media(max-width:1210px){
        display:none;
    }
}
`
const StyledLink1 = styled(Link)`
    display:inline-block;
    font-weight:545;
    font-size:16px;
    text-align:center;
    text-transform:none;
    letter-spacing:.5px;
    padding:0,10px; 
    margin-top:0;        
    flex-wrap:nowrap;
    width:100%;
    color:white;
    
`
const RightMenu = styled.div`
display:flex;
align-items:center;
flex-wrap:nowrap;
width:300px;
margin-right:10px;
justify-content:center;
height:100%
padding-bottom:20px;
     ul{
        width:100%;
         height:100%; 
         padding-top:20px;
         
        li{
            list-style:none;
            margin:0;
            margin-bottom:25px;            
            display:inline-flex;         
            text-align:center;
            justify-content: center;
            align-items: center;
             font-weight:545;
            text-transform:none;
             letter-spacing:.5px;
            color:white;    
            cursor:pointer;
            flex-wrap:nowrap;    
        }
        .seven, .menu{
            width:21%;
            }
        .eight, .logout{
            width:29%;
        }
         .hr{
            height:30px;
            margin:-50px 0;
             border:none;        
            transition:.3s ease-in-out;
        }
       .seven:hover~.hr{
          box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
          border:none;
          border-radius:10px;
          width:21%;
           
       }
       .eight:hover~.hr{
          box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
          border:none;
          border-radius:10px;
           margin-left:21%;
           width:29%;
       }
       .logout:hover~.hr{
          box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
          border:none;
          border-radius:10px;
          margin-left:50%;
          width:29%;
        }
       .menu:hover~.hr{
          box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.125) inset;
          border:none;
          border-radius:10px;
          margin-left:79%;
          width:21%;
        }
         @media(max-width:1161px){
            margin:0 10px;
            
         }
            

     }
.one{
    
    @media(max-width:1161px){
        display:none;
    }
}
.two{
    @media(max-width:1161px){
        display:none;
    }
}

@media(max-width:1350px){
    margin-right:30px;
}
    
@media(max-width:1161px){
    justify-content:flex-end;
}

 `
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:#222222;
    width:300px;
    z-index:10;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:Start;
    overflow:auto;
    overflow-x:hidden;
    list-style:none;
    &::-webkit-scrollbar{
        display:none;
    }
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(255,255,255,.2);
        
    }
    transform:${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform .35s ease-in-out;
    @media(max-width:430px){
        width:60vw;
    }
 `
const StyledLink2 = styled(Link)`
 color:white;`
const CloseWrapper = styled.div`
 display:flex;
 justify-content:flex-end;`
const CustomClose = styled(CloseIcon)`
 fill:white !important;
 color:white !important;
 :hover{
     cursor:pointer;
 }
 
 `

const Container_Body = styled.div`
width:100vw;
`
const Account_person = styled.div`
width:100vw;
// min-height:60px;
// // margin-top:60px;
position:fixed;
padding: 60px 140px;
padding-bottom: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:2vh 0;


background-color:white;
hr{
    margin-top:2vh;
    width:95%;
    color:#222222;
}


`
const Account__subheader = styled.div`
     width:100%;
     display: flex;
     justify-content: space-between;
     align-items: center;

`
const PersonLeft = styled.div`
     display:flex;
     h4{
         text-transform:capitalize;
         font-weight:700;
         font-size:20px;
         letter-spacing:.5px;
         padding:0,10px; 
         margin-top:0;        
         flex-wrap:nowrap;
     

     }
`
const PersonRight = styled.div`
display:flex;

width:20vw;
li{
    list-style:none;
    display:inline-block;
    font-weight:545;
    font-size:16px;
    text-align:center;
    transition: all 0.2s;
    text-transform: capitalize;
    text-decoration: none;
    letter-spacing:.5px;
    padding:0,10px; 
    margin-top:0;        
    flex-wrap:nowrap;
    width:33%;
    color:#393c41;
    
    :hover{
        cursor:pointer;
    }
}

`
const StyledLink3 = styled(Link)`
display:inline-block;
font-weight:545;
font-size:16px;
text-align:center;
transition: all 0.2s;
text-transform: capitalize;
text-decoration: none;
letter-spacing:.5px;
padding:0,10px; 
margin-top:0;        
flex-wrap:nowrap;
width:33%;
color:#393c41;`

const Cars = styled.div`

display:grid;
place-items:center;
gap: 30px;
padding-bottom:10px;

`

