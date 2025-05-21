import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const SignIn = () => {
    const { sinInUser } = use(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //firebase sinIn 
        sinInUser(email, password)
            .then(result => {
                console.log(result.user);
                const updateUserInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                //Update user info in db
                fetch('http://localhost:3000/users', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(updateUserInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card bg-base-100 mx-auto mt-[20%] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">SignIn now!</h1>
                <form
                    onSubmit={handleSignIn}
                    className="fieldset">
                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        name='email'
                        required
                        className="input"
                        placeholder="Email" />
                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                        type="password"
                        name='password'
                        className="input"
                        required
                        placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;