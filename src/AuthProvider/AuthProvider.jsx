import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create Account
    const registration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // account Login
    const loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out here
    const logOut = () => {
        return signOut(auth);
    }

    //signIn with google
    const googleSignIN = () => {
        return signInWithPopup(auth, provider);
    }

    // onAuthStateChanged
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }

    },[])

    const authInfo = {
        user,
        registration,
        loginAccount,
        logOut,
        googleSignIN
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
   children: PropTypes.node, 
}
export default AuthProvider;