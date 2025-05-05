import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Navbar/Navbar'

function Register() {
    return (
        <>
            <section className="bg-dark-7 min-h-screen">
                <Navbar />
                {/* login form */}
                <div className="mt-20">
                    <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
                        <h1 className="w-full max-w-10/12 mx-auto py-12 text-3xl font-semibold text-center border-b border-gray-300">Register your account</h1>
                        <form className="w-full max-w-10/12 mx-auto py-12 ">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input w-full" placeholder="Name" />
                                <label className="label">Photo URL</label>
                                <input type="text" className="input w-full" placeholder="Photo URL" />
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                                <div><input type="checkbox" defaultChecked className="checkbox" /> Accept Terms & Conditions</div>
                                <button className="btn bg-dark-2 text-white w-full">Login</button>
                            </fieldset>
                            <p>Already Have An Account ? <Link to="/login" className="link link-hover">Login</Link></p>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Register