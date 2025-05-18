import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../components/firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // create user 
    const crateUser =(email, password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn user
    const signInUser = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out user
      const logOutUser =()=>{
        setLoading(true)
        return signOut(auth); 
      }


    // onAuth change 
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('current user', currentUser)
            setUser(currentUser); 
            setLoading(false)
        })
        return()=>{
            unSubscribe(); 
            
        }
    } , []);


    const userInfo = {
        crateUser, 
        signInUser, 
        user, 
        logOutUser,
        loading
    }
 
    return (
        <AuthContext value={userInfo}> {children} </AuthContext>
    );
};

export default AuthProvider;