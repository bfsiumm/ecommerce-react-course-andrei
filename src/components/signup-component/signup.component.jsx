import React from 'react';
import FormInput  from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './signup.styles.scss';

class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password:'',
            confirmPassword: ''
        }
    }

    handleChange =  event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {  displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert('Password doesn\'t match');
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({displayName: '',
            email: '',
            password:'',
            confirmPassword: ''})
        } catch(err) {
            console.log('error signing up ',err);
        }
    }
    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name='displayName'
                        label='Display Name'
                        handleChange={this.handleChange}
                        type='text'
                        value={this.state.displayName}
                        required
                    />
                    <FormInput
                        name='email'
                        label='Email'
                        handleChange={this.handleChange}
                        type='email'
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name='password'
                        label='Password'
                        handleChange={this.handleChange}
                        type='password'
                        value={this.state.password}
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        label='Confirm Password'
                        handleChange={this.handleChange}
                        type='password'
                        value={this.state.confirmPassword}
                        required
                    />
                    <CustomButton type='submit' onClick={this.handleSignup}>SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;