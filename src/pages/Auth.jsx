import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'

function Auth() {
    return (
        <>
            <section className="bg-dark-7 min-h-screen">
                <Navbar />
                <Outlet />

            </section>
        </>
    )
}
export default Auth
