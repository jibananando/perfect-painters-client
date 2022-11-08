import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const SocialSignUp = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="card-body">
            <div className="form-control">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">Login With Google</button>
            </div>
        </div>
    );
};

export default SocialSignUp;