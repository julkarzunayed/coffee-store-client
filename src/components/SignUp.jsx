import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    // console.log(createUser)
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...userProfile } = Object.fromEntries(formData.entries())
        
         

        // Create user by FireBAse
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const userData = {
                    email, 
                    ...userProfile,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }


                // Create user in DB
                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Data after user create' , data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Created",
                                text: "Your account created successfully.",
                                icon: "success",
                                timer: 1500
                            });
                        }
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card bg-base-100 mx-auto mt-[20%] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">SignUp now!</h1>
                <form
                    onSubmit={handleSignUp}
                    className="fieldset">
                    {/* Name */}
                    <label className="label">Name</label>
                    <input
                        type="text"
                        name='name'
                        required
                        className="input"
                        placeholder="Name" />
                    {/* Address */}
                    <label className="label">Address</label>
                    <input
                        type="text"
                        name='address'
                        required
                        className="input"
                        placeholder="Address" />
                    {/* Phone */}
                    <label className="label">Phone</label>
                    <input
                        type="text"
                        name='phone'
                        required
                        className="input"
                        placeholder="Phone Number" />
                    {/* Photo */}
                    <label className="label">Photo Url</label>
                    <input
                        type="text"
                        name='photo_URL'
                        required
                        className="input"
                        placeholder="Photo URL" />
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
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;