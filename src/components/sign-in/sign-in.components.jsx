import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch(err) {
      console.log('Error signing in with email and password')
    }
  }


  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span >Sign in with  your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='text'
            value={this.state.email}
            onChange={this.handleChange}
            required
            label='Email'
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
            label='Password'
          />
          <div className='buttons'>
            <CustomButton type='submit' onClick={this.handleSigninWithEmailAndPassword}>
              Sign in
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignInBtn >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;