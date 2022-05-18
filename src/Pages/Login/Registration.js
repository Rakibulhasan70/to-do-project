import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Registration.css'



const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [error1, setError1] = useState('')
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorElement;

    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>
    }



    if (user) {
        navigate('/home')
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordBlur = e => {
        setconfirmPassword(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError1('your password is incorrect')
            return
        }
        createUserWithEmailAndPassword(email, password)

    }

    return (
        <div className='register-form container '>
            <div>
                <h2 style={{ color: 'purple' }} className='mt-3 mb-3  text-center' >Please Register</h2>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" name="text" id="" placeholder='Your name' />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email' required />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" placeholder='Confirm Password' required />
                    <p><small className='text-danger'>{error1}</small></p>

                    <input
                        style={{ height: '40px' }} className='btn btn-primary w-50 mx-auto d-block text-white '
                        type="submit"
                        value="Register" />

                </form>
                {errorElement}
                <p>Already have an account? <Link to={'/login'} className='text-primary text-decoration-none' >Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;