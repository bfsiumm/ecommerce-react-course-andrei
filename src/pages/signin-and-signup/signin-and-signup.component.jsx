import React from 'react';

import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/signup-component/signup.component';
import './signin-and-signup.styles.scss';

const SinginAndSignUp = () => (
    <div className='signin-and-signup'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SinginAndSignUp;