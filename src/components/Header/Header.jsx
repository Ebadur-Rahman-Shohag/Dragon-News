import React from 'react'
import logo from "../../assets/logo.png"
function Header() {
    return (
        <>
            <div className='flex flex-col gap-5 items-center py-8'>
                <img className='object-cover' src={logo} alt="logo" />
                <div className='space-y-3 text-center '>
                    <h1 className='text-lg text-dark-3 font-normal'>Journalism Without Fear or Favour</h1>
                    <p className='text-dark-3 text-xl font-medium'><span className='text-dark-2'>Sunday</span>, November 27, 2025</p>
                </div>

            </div>
        </>
    )
}

export default Header