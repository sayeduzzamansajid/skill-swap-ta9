import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,  updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';



const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ emailref, setEmailref] = useState("")

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const updateuser =(obj)=>{
        return updateProfile(auth.currentUser,obj)
    }

    const authInfo = {
        user,
        setUser,
        updateuser,
        loading,
        setLoading,
        createUser,
        signIn,
        googleSignIn,
        emailref, setEmailref,

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }

    },[])



    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;