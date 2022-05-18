import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
// import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error1, setError1] = useState('')
    const location = useLocation()


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const from = location.state?.from?.pathname || "/";


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );


    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent email')
        }
        else {
            toast('please enter your email address')
        }
    }

    let errorElement;

    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
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




    const handleFormSubmit = e => {
        e.preventDefault()

        signInWithEmailAndPassword(email, password)

    }
    return (
        <div className='register-form container w-50'>
            <div>
                <h2 style={{ color: 'purple' }} className=' text-center mt-5 mb-4'>Please Login</h2>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='text-danger'><small>{error1}</small></p>
                    <Button variant="primary w-50 mx-auto d-block mb-4 mt-3" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}

                <p>New to My Website? <Link to={'/register'} className='text-primary text-decoration-none'>Please Register</Link></p>

                <p>Forget Password? <button className='ps-0 btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;