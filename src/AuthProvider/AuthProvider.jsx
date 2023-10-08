import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create Account
    const registration = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // profile update
    const profileUpdate = (name, imageUrl) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imageUrl,
        });
    }

    // account Login
    const loginAccount = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out here
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    //signIn with google
    const googleSignIN = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // onAuthStateChanged
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
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
        googleSignIN,
        profileUpdate,
        loading
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