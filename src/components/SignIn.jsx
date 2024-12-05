import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const SignIn = () => {
    const { loginUser } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value; // Correctly assign email
        const password = e.target.password.value; // Correctly assign password

        loginUser(email, password) // Pass correct arguments to loginUser
            .then(result => {
                console.log(result.user);
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;

                const updateTime = { email, lastSignInTime };
                
                // Ensure the backend supports PATCH and check your CORS policy
                fetch('http://localhost:5000/users', {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updateTime),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('hello', data);
                    })
                    .catch(fetchError => {
                        console.error('Fetch error:', fetchError);
                    });
            })
            .catch(authError => {
                console.error('Login error:', authError);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignIn now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
