import React from 'react';
import SignIn from "../../components/sigin/sigin.component";
import SignUp from "../../components/sigup/sigup.component";

import './signin-signup.style.scss'

const SignInAndSignUpPage = () => (

    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>

);

export default SignInAndSignUpPage;