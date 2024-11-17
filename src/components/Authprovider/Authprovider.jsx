import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const authContext = createContext()

const Authprovider = ({routes}) => {

    const [user,setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()

    const handleGooleLogin = () => {
        return signInWithPopup(auth,googleProvider)
    }

    const handleRegister = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleLogin = (email,password) => {
        return signInWithEmailAndPassword(auth, email,password)
    }

    const handleLogOut = () => {
        return signOut(auth)
    }

    const manageProfile = (name,image) => {
        updateProfile(auth.currentUser,{
            displayName:name,photoURL:image
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })
    
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        handleGooleLogin,
        handleLogOut,
        handleLogin,
        handleRegister,
        manageProfile,
    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    routes
                }
            </authContext.Provider>
        </div>
    );
};

export default Authprovider;