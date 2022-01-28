import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { signup, updateprofile } from '../../firebase/Firebase';
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import './Signup.css'
import ButtonPrimary from '../../components/Buttons/Primary/ButtonPrimary';
import ButtonSecondary from '../../components/Buttons/Secondary/ButtonSecondary';
function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signUp = (e) => {
        e.preventDefault()
        if (!fName) {
            return alert('Please enter a First Name')
        }
        if (!lName) {
            return alert('Please enter a Last Name')
        }
        signup(email, password).then((userAuth) => {
            updateprofile(fName);
            dispatch(
                login(
                    {
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: fName,
                    })

            )
            navigate('/account');
        })
            .catch((error) => alert(error.message))
    }
    //Signed in 


    return (
        <div className="signup">

            <div className="signup__header">
                <div className="signup__logo">
                    <Link to="/">
                        <img src='/images/logo.svg' alt='' />
                    </Link>
                </div>
                <div className="signup__language">
                    <LanguageOutlinedIcon /><span>en-US</span>
                </div>
            </div>
            <div className="signup__info">
                <h1>Create Account</h1>

                <form className='signup__form'>
                    <label htmlFor="fName">First Name</label>
                    <input type="Text"
                        id='fName'
                        value={fName}
                        onChange={(e) => setfName(e.target.value)} />
                    <label htmlFor="lName">Last Name</label>
                    <input type="text"
                        id='lName'
                        value={lName}
                        onChange={(e) => setlName(e.target.value)} />
                    <label htmlFor="email">Email Address</label>
                    <input type="email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor='email'>Password</label>
                    <input type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <ButtonPrimary name='Create Account' type='submit' onClick={signUp} />
                </form>
                <div className="signup__divider">
                    <hr /><span>OR</span><hr />
                </div>
                <Link to="/login" >
                    <ButtonSecondary name='Sign-in' />
                </Link>
            </div>
        </div>
    )
}

export default Signup
