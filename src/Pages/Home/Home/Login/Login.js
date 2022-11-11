import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';
import SocialSignUp from '../SocialSignUp/SocialSignUp';

const Login = () => {
    useTitle('Login');
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        Login(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                fetch('https://perfect-painters-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)
                    })

            })
            .catch(error => {
                console.log(error);
            })

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