import { useContext, useState } from "react";
import useForm from "../../../hooks/useForm";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthContext from "../../../contexts/authContext";
import {emailValidator,
    passwordValidator}
    from '../../../errors/Error';

import './login.css';
import styles from './login.css';
const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

const Login = () => {

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const {loginSubmitHandler} = useContext(AuthContext);
    /* const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }); */

    const { values, onChange, onSubmit } = useForm(
        async () => {
          try {
            await loginSubmitHandler(values);
          } catch (error) {
            console.error('Login Failed', error);
          }
        },
        {
          [LoginFormKeys.Email]: '',
          [LoginFormKeys.Password]: '',
        }
      );

    

    const emailHandler = () => {
        const error = emailValidator(values[LoginFormKeys.Email]);
        setEmailError(error);
    };

    const passwordHandler = () => {
        const error = passwordValidator(values[LoginFormKeys.Password]);
        setPasswordError(error);
    }

    return (
        <section className="ontainer">
            <ToastContainer />
            <div className="anmelden__tok">
                <h2 className="anmelden">You can loged</h2>
            </div>
            <div className="formular">
                <form id="kontakt-formular" onSubmit={onSubmit}>
                    <div className="kontakt-formular-center">
                    <input
                    id="email" 
                    type="email" 
                    name={LoginFormKeys.Email} 
                    placeholder="Your Email"
                    onChange={onChange}
                    value={values[LoginFormKeys.Email]}
                    onBlur={emailHandler}
                    />
                    {emailError && (
                            <p className={styles.errorMessage}>{emailError}</p>
                        )}
                    <div>
                    <input id="login-password"
                    type="password"
                    name={LoginFormKeys.Password}
                    placeholder="Your Password"
                    onChange={onChange}
                    value={values[LoginFormKeys.Password]}
                    onBlur={passwordHandler}
                    />
                    {passwordError && (
                            <p className={styles.errorMessage}>{passwordError}</p>
                        )}
                    </div>
                    <button
                    className="button button--red--absenden"
                    type="submit"
                    name="absendenbutton">Login!</button>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Login;