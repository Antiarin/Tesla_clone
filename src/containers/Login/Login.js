import React, { useState } from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

import {useDispatch} from 'react-redux'
import { signin} from '../../firebase/Firebase'

import { login } from '../../features/userSlice';
import ButtonPrimary from '../../components/Buttons/Primary/ButtonPrimary';
import ButtonSecondary from '../../components/Buttons/Secondary/ButtonSecondary';
function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
     const dispatch= useDispatch() 
     const navigate= useNavigate() // useNavigate instead of useHistory in v6 history.push()has changed to navigate()  

    const signIn= async (e)=>{
        e.preventDefault() 
         await signin( email, password).then((userAuth) => {
          // Signed in 
          dispatch(
              login({
                  email:userAuth.user.email,
                  uid:userAuth.user.uid,
                  displayName:userAuth.user.displayName,
                   
              })
          )
          navigate('/account');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message);
        });

    }
    return (
        <div className='login'>
            <div className="login__header">
                <div className="login__logo">
                    <Link to="/">
                    <img src='/images/logo.svg' alt='' />
                    </Link>
                </div>
                <div className="login__language">
                    <LanguageOutlinedIcon/><span>en-US</span>
                </div>
            </div>

            <div className="login__info">
                <h1>Sign-in</h1>
                <form className= 'login__form'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" 
                    id='email' 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor='email'>Password</label>
                    <input type="password" 
                    id='password' 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}/>
                     <ButtonPrimary name='Sign-In' type='submit' onClick={signIn}/>
                </form>
                <div className="login__divider">
                    <hr/><span>OR</span><hr/>
                </div>
                <Link to ="/signup" >
                    <ButtonSecondary name='Create Account' />
                </Link>
            </div>
            
        </div>
    )
}

export default Login
