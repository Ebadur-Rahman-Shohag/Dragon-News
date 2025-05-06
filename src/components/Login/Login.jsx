import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

function Login() {
    /**
     * Renders a login form
     *
     * @returns {React.ReactElement} a login form
     */

    const { loginUser } = useContext(AuthContext)
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password).then(result => console.log(result)).catch(error => console.log(error));
    };
    return (
        <>
            <section>
                {/* login form */}
                <div className="mt-20">
                    <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
                        <h1 className="w-full max-w-10/12 mx-auto py-12 text-3xl font-semibold text-center border-b border-gray-300">
                            Login your account
                        </h1>
                        <form onSubmit={handleLoginSubmit} className="w-full max-w-10/12 mx-auto py-12 ">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    className="input w-full"
                                    placeholder="Email"
                                    name="email"
                                />
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    className="input w-full"
                                    placeholder="Password"
                                    name="password"
                                />
                                <div>
                                    <a className="link link-hover">Forgot password?</a>
                                </div>
                                <button type="submit" className="btn bg-dark-2 text-white w-full">
                                    Login
                                </button>
                            </fieldset>
                            <p>
                                Dont’t Have An Account ?{" "}
                                <Link to="/auth/register" className="link link-hover">
                                    Register
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
