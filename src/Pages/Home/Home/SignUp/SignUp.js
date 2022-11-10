import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../../hooks/useTitle';
import SocialSignUp from '../SocialSignUp/SocialSignUp';

const SignUp = () => {
    useTitle('SignUp');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero">
            <div className="hero-content grid cols-2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered" required /> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div>
                        <div className="form-control">
                            <SocialSignUp></SocialSignUp>
                            <p className='mb-6 text-center'>Already have an account? <Link className='text-orange-600' to='/login' >Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;