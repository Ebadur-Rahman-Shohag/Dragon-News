import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import profileIcon from "../../assets/user.png"
import { AuthContext } from '../../provider/AuthProvider'

function Navbar() {
    const user = useContext(AuthContext)
    console.log(user);
    return (
        <>
            <nav className='w-full max-w-11/12 mx-auto flex justify-between items-center py-8'>
                {/* empty div */}
                <div></div>
                {/* menu links */}
                <div className='space-x-5 text-dark-3 text-lg'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>

                </div>
                {/* profile icon and button */}
                <div className='flex items-center gap-3'>
                    <img src={profileIcon} alt="profile-icon" />
                    <Link to="/auth/login" className='btn bg-dark-2 text-white text-xl font-semibold px-7 py-5'>Login</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar