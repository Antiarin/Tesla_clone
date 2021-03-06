import React, { useEffect } from 'react';
import './App.css';
import { render } from "react-dom";
import {
   BrowserRouter,
   Routes,
   Route,
   useNavigate
} from "react-router-dom";

import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Home from './containers/Home/Home';
import Account from './containers/Account/Account';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
//firebase
import { auth } from './firebase/Firebase'
import { onAuthStateChanged } from "firebase/auth";
import ModelS from './containers/ModelS/ModelS';
import Model3 from './containers/Model3/Model3';
import ModelY from './containers/ModelY/ModelY';
import ModelX from './containers/ModelX/ModelX';
import SolarPanel from './containers/Solarpanel/SolarPanel';
import SolarRoof from './containers/SolarRoof/SolarRoof';
function App() {
   const user = useSelector(selectUser);
   const dispatch = useDispatch()
   useEffect(() => {
      onAuthStateChanged(auth, (userAuth) => {
         if (userAuth) {
            // User is signed in, see docs for a list of available properties
            dispatch(
               login({
                  email: userAuth.email,
                  uid: userAuth.uid,
                  displayName: userAuth.displayName,
               })

            )


         } else {
            // User is signed out
            dispatch(logout())
         }
      })
   }, [dispatch]);
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" exact element={<Home />}></Route>
               <Route path="/models" element={<ModelS />}></Route>
               <Route path="/model3" element={<Model3 />}></Route>
               <Route path="/modelx" element={<ModelX />}></Route>
               <Route path="/modely" element={<ModelY />}></Route>
               <Route path="/solarpanel" element={<SolarPanel />}></Route>
               <Route path="/solarroof" element={<SolarRoof/>}></Route>
               <Route path="/login" element={<Login />}></Route>
               {/* <Route path="/login" >{!user?<Login/>} */}
               {/* // </Route> in router v5 this can b e done not in v6 cause it handles the server side routing */}
               <Route path="/signup" element={<Signup />}></Route>
               <Route path="/account" element={<Account />}></Route>
            </Routes>
         </BrowserRouter>
      </div>

   );
}

export default App
