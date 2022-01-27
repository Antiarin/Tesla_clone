import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";



// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBrAn4CHliOtttlNosxLher4tOknB7n92I",
  authDomain: "the-tesla-clone.firebaseapp.com",
  projectId: "the-tesla-clone",
  storageBucket: "the-tesla-clone.appspot.com",
  messagingSenderId: "192148480883",
  appId: "1:192148480883:web:281f9e8347f1e5a3061b06",
  measurementId: "G-R5Y4W0Q4K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);

export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
}

export function signin(email,password){
  return signInWithEmailAndPassword(auth,email,password);
}
