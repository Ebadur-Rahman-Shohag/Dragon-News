import React, { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../../provider/AuthProvider'

function Register() {

    const { createUser } = useContext(AuthContext)

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password).then(result => console.log(result)).catch(error => console.log(error));
    }
    return (
        <>
            <section>
                {/* login form */}
                <div className="mt-20">
                    <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
                        <h1 className="w-full max-w-10/12 mx-auto py-12 text-3xl font-semibold text-center border-b border-gray-300">Register your account</h1>
                        <form onSubmit={handleRegisterSubmit} className="w-full max-w-10/12 mx-auto py-12 ">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input w-full" placeholder="Name" name='name' />
                                <label className="label">Photo URL</label>
                                <input type="text" className="input w-full" placeholder="Photo URL" name='photo' />
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" name='email' />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" name='password' />
                                <div><input type="checkbox" defaultChecked className="checkbox" /> Accept Terms & Conditions</div>
                                <button type='submit' className="btn bg-dark-2 text-white w-full">Register</button>
                            </fieldset>
                            <p>Already Have An Account ? <Link to="/auth/login" className="link link-hover">Login</Link></p>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Register