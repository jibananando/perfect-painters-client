import React from 'react';
import { Link } from 'react-router-dom';
import SocialSignUp from '../SocialSignUp/SocialSignUp';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <div className="hero">
            <div className="hero-content grid cols-2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        <div className="form-control">
                            <SocialSignUp></SocialSignUp>
                            <p className='mb-6 text-center'>Don't have an account? <Link className='text-orange-600' to='/signup' >Sign up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;