import { useContext, useState } from "react";

import AuthContext from "../../../contexts/authContext";
import useForm from "../../../hooks/useForm";

import './register.css';
import styles from './register.css';
import { Link } from "react-router-dom";

const Register = () => {

    const [emailError, setEmailError] = useState('');

    const RegisterFormKeys = {
        Email: 'email',
        Password: 'password',
        ConfirmPassword: 'confirm-password',
    }

    const {registerSubmitHandler} = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    const emailValidator = () => {
        if(values.Email !== 'siana@abv.bg') {
            setEmailError('Email must be Siana');
        }
    }

    return (
        <section className="ontainer-anmelden">
            <div className="anmelden__tok">
                <h2 className="anmelden"> Take your register Profile</h2>
            </div>
            <div className="formular">
                <form id="kontakt-formular" onSubmit={onSubmit}>
                    <div className="kontakt-formular-center">
                        <input 
                        id="email" 
                        type="email"
                        name="email"
                        placeholder="Your Email" 
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]}
                        onBlur={emailValidator}
                        />
                        {emailError && (
                            <p className={styles.errorMessage}>{emailError}</p>
                        )}
                    </div>
                    <div className="kontakt-formular-center">
                        <input id="register-password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                        />
                    </div>
                    <div className="kontakt-formular-center">
                        <input 
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="Confirm Password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />
                    <br />
                    <button
                    className="button button--red--absenden"
                    type="submit"
                    value="Register"
                    name="absendenbutton">Registration!</button>
                    </div>
                    <p>
                        <span>If you already have profile click <Link to="/login">Here</Link> </span>
                    </p>
                </form>
            </div>
        </section>
    )
};

export default Register;