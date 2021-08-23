import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import './sigup.styles.scss';

class SignUp extends React.Component
{
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event =>
    {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword)
        {
            alert("senha e confirmar senha devem ser iguais");
            return;
        }

        try
        {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        }
        catch (error) {
            console.log(error);
        }



    }

    handleOnChange = event =>
    {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render() {

        const { displayName, email, password, confirmPassword } = this.state;

        return(
            <div className='sign-up'>
                <h2 className='title'>Eu não tenho uma conta</h2>
                <span>Se cadastre com um email e senha</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleOnChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleOnChange}
                        label='E-mail'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleOnChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleOnChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit'>CADASTRAR</CustomButton>

                </form>
            </div>
        );
    }
}

export default SignUp;