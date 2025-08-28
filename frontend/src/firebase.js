import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMgFdU1URbI3M-53Qo5sR1zqPv37DIKpo",
  authDomain: "library-ddddc.firebaseapp.com",
  projectId: "library-ddddc",
  storageBucket: "library-ddddc.appspot.com", // ✅ fixed
  messagingSenderId: "898335848316",
  appId: "1:898335848316:web:e4f2f418a40375589a16f9",
  measurementId: "G-K7EB2TJEY0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

export { onAuthStateChanged };
