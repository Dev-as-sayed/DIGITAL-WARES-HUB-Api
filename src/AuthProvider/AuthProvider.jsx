import { useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase";
import { useEffect } from "react";

export const AuthContaxt = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect( () => {
        const unSubscibe = onAuthStateChanged(auth, carentUser =>{
            setUser(carentUser)
            setLoading(false)
        })
        return ( () => unSubscibe)
    }, [])

    const authInformation ={
        user,
        loading,
        createNewUser,
        logIn,
        logOut
    };
    return (
        <AuthContaxt.Provider value={authInformation}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProvider;