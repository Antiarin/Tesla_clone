import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase"
import { useSelector, useDispatch } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'

import AccountCar from './AccountCar/AccountCar'
import Header from '../../components/Header/Header';

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
    
    return (
        <Container>
            <Container_header>
                <Header fontcolor="white" />

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
     top:0;
     left:0;
     right:0;
     z-index:1;     
     background:#222222;

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

