import React, { useContext } from 'react';
import { authContext } from '../Authprovider/Authprovider';
import { Link } from 'react-router-dom';


const Login = () => {
    const {handleGooleLogin, handleLogin} = useContext(authContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword .value

        console.log(name,email,password,confirmPassword)

        handleLogin(email,password)
        .then(result => console.log(result.ueser))
        .catch(error => console.log(error.message))
    }

    return (
        <div>
        <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
            email:<input type="text" name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
            password:<input type="text" name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
            confirm-password:<input type="text" name='confirmPassword' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <button className='btn btn-primary'>Login</button>
        </form>
        <button onClick={handleGooleLogin} className='btn btn-primary'>google login</button>
        you dont have account ? <Link to="/register" className='text-red-500'>Register</Link>
    </div>
    );
};

export default Login;