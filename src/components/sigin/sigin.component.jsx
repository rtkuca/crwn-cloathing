import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import './sigin.style.scss';

class SignIn extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});

        }catch (error) {
            console.log('Ocorreu um erro de login', error);
        }


    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    render()
    {
        return(
            <div className='sign-in' >
                <h2>Eu já tenho uma conta</h2>
                <span>Entrar com seu email e senha</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="text"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="E-mail"
                        required
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Senha"
                        required
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>ENTRAR</CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >

                            {' '} ENTRAR COM GOOGLE {' '}
                        </CustomButton>

                    </div>

                </form>

            </div>
        );
    }

}


export default SignIn;