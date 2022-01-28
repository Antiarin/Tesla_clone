import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {firebaseConfig} from './Firebase_config'


// Your web app's Firebase configuration



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);

export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
}

export function signin(email,password){
  return signInWithEmailAndPassword(auth,email,password);
}

export function updateprofile(displayName){
  return updateProfile(auth.currentUser,{displayName});
}