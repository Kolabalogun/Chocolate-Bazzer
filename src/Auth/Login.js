import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Footer from '../Frontend/Components/Footer'
import Navbar from '../Frontend/Components/Navbar'
import { useGlobalContext } from '../Functions/Context'
import AnimatedPage from '../Utils/AnimatedPage'
import { auth } from '../Utils/Firebase'
import EachSocials from './EachSocials'

import './style.css'




const initialState = {
    name: "",


    email: "",
    password: "",
    confirmPassword: "",
};

const Login = () => {

    const { loader, loaderF, notification, notificationF, signInTypeF, navigate } = useGlobalContext()


    const [authstate, authstateF] = useState(true)

    function handleAuthChange(params) {
        authstateF(!authstate)
    }



    const [state, setstate] = useState(initialState);


    const [signUp, setsignUp] = useState(false);


    const { name, email, password, confirmPassword } = state;

    function handleChange(e) {
        setstate({ ...state, [e.target.name]: e.target.value });
    }

    const handleAuth = async (e) => {
        e.preventDefault();

        if (!signUp) {
            if (email && password) {
                loaderF(true);
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        // console.log(user);
                        notificationF("");
                        navigate(-1)
                        signInTypeF(false);
                        loaderF(false);
                        return toast("You've successfully Signed In");
                    })

                    .catch((error) => {
                        loaderF(true);
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        notificationF(errorMessage);
                        loaderF(false);
                    });
            } else {
                return toast.error("All fields must be filled");
            }
        } else {
            if (password !== confirmPassword) {
                return toast.error("Password don't match");
            }
            if (name && email && password) {
                loaderF(true);
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                await updateProfile(user, { displayName: `${name}` });
                navigate("/");
                loaderF(false);
                return toast("You've successfully Signed Up");
            } else {
                return toast.error("All fields must be filled");
            }
        }
    };




    const hh = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            return toast.error("Password don't match");
        }
        if (name && email && password) {
            loaderF(true);
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(user, { displayName: `${name}` });
            navigate(-1)
            loaderF(false);
            return toast("You've successfully Signed Up");
        } else {
            return toast.error("All fields must be filled");
        }
    };










    return (
        <AnimatedPage>
            <div className="login">

                <Navbar />

                <div className="loginBody">



                    <div className={authstate ? 'container right-panel-active' : 'container'} id="container">


                        <div className="form-container sign-up-container">
                            <form className='loginForm' onSubmit={hh}>
                                <h1>Create Account</h1>


                                <EachSocials />


                                <span className='loginSpan'>or use your email for registration</span>


                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={name}
                                    required
                                    minLength={3}
                                    placeholder="Your Name"
                                    name="name"
                                    className='loginInput'
                                />
                                <input
                                    type="email"
                                    onChange={handleChange}
                                    value={email}
                                    required
                                    minLength={4}
                                    placeholder="Email"
                                    name="email"
                                    className='loginInput'
                                />
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    value={password}
                                    required
                                    minLength={4}
                                    placeholder="Password"
                                    name="password"
                                    className='loginInput'
                                />
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    value={confirmPassword}
                                    required
                                    minLength={4}
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    className='loginInput'
                                />



                                <button className='loginBtn'>Sign Up</button>


                            </form>
                        </div>


                        <div className="form-container sign-in-container">


                            <form className='loginForm' onSubmit={handleAuth}>
                                <h1>Sign in</h1>
                                <EachSocials />


                                <span className='loginSpan'>or use your account</span>

                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={email}
                                    required
                                    minLength={4}
                                    placeholder="Email"
                                    name="email"
                                    className='loginInput'
                                />
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    value={password}
                                    required
                                    minLength={4}
                                    placeholder="Password"
                                    name="password"
                                    className='loginInput'
                                />


                                <a className='fp' href="https://www.facebook.com">Forgot your password?</a>


                                <button className='loginBtn'>Sign In</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p className='loginTxt'>To keep connected with us please login with your personal details</p>
                                    <button className="loginBtn ghost" id="signIn" onClick={() => {
                                        handleAuthChange();
                                        setsignUp(false)
                                    }}>Sign In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hi There!</h1>
                                    <p className='loginTxt'>Enter your personal details to open an account with us</p>
                                    <button className=" loginBtn ghost" id="signUp" onClick={() => {
                                        handleAuthChange();
                                        setsignUp(true)
                                    }}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </AnimatedPage>
    )
}

export default Login