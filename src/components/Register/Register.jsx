import React, { useContext, useState } from 'react';
import { authContext } from '../Authprovider/Authprovider';


const Register = () => {

    const {handleRegister,manageProfile} = useContext(authContext)
    const [error,setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        const name = e.target.name.value;
        const image = e.target.image.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword .value

        if(password.length < 6){
            setError("Password must contain at least 6 characters")
            return
        }
        if(password !== confirmPassword){
            setError("password didnt match")
            return;
        }
        if(!/[a-z]/.test(password)){
            setError("Password must contain at least one lowercase letter")
            return;
        }
        if(!/[A-Z]/.test(password)){
            setError("Password must contain at least one uppercase letter")
            return;
        }

        console.log(name,image,email,password,confirmPassword)

        handleRegister(email,password)
        .then(result => {
            console.log(result.ueser)
            manageProfile(name,image)
        })
        .catch(error => console.log(error.message))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                name:<input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                image:<input type="text" name='image' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                email:<input type="text" name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                password:<input type="text" name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                confirm-password:<input type="text" name='confirmPassword' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <button className='btn btn-primary'>register</button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Register;