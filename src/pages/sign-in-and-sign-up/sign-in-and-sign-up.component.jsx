import React from 'react';
import SignUpComponent from '../../components/sign-up-component/sign-up.component';
import SignIn from '../../components/signIn/sign-in.component';
import './sign-in-and-sign-up.styles.scss';
const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUpComponent></SignUpComponent>
    </div>
);
export default SignInAndSignUp;