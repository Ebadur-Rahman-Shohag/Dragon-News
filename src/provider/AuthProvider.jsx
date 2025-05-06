import React, { createContext } from 'react'
export const AuthContext = createContext(null)
import app from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app);
function AuthProvider({ children }) {
    // register user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        createUser,
        loginUser,
        auth
    }
    return (
        <>
            <AuthContext value={authData}>{children}</AuthContext>
        </>
    )
}

export default AuthProvider