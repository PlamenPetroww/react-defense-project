import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import AuthContext from "../../../contexts/authContext";
import useForm from "../../../hooks/useForm";

import {
    emailValidator,
    passwordValidator,
    confirmPasswordValidator
} from '../../../errors/Error';

import './register.css';
import styles from './register.css';

const Register = () => {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const RegisterFormKeys = {
        Email: 'email',
        Password: 'password',
        ConfirmPassword: 'confirm-password',
    }

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit, resetForm } = useForm(
        async () => {
            try {
                if (!submitting) {
                    setSubmitting(true);
                    await registerSubmitHandler(values);
                }
            } catch (error) {
                console.error('Registration Failed', error);
                toast.error('Registration failed. Please check your data.');
            } finally {
                setSubmitting(false);
            }
        },
        {
            [RegisterFormKeys.Email]: '',
            [RegisterFormKeys.Password]: '',
            [RegisterFormKeys.ConfirmPassword]: '',
        }
    );

    const emailHandler = () => {
        const error = emailValidator(values[RegisterFormKeys.Email]);
        setEmailError(error);
    };

    const passwordHandler = () => {
        const error = passwordValidator(values[RegisterFormKeys.Password]);
        setPasswordError(error);
    }

    const confirmPasswordHandler = () => {
        const error = confirmPasswordValidator(values[RegisterFormKeys.Password], values[RegisterFormKeys.ConfirmPassword]);
        setConfirmError(error);
    };

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
                            value={values[RegisterFormKeys.Email]}
                            onBlur={emailHandler}
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
                            value={values[RegisterFormKeys.Password]}
                            onBlur={passwordHandler}
                        />
                        {passwordError && (
                            <p className={styles.errorMessage}>{passwordError}</p>
                        )}
                    </div>
                    <div className="kontakt-formular-center">
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            onChange={onChange}
                            value={values[RegisterFormKeys.ConfirmPassword]}
                            onBlur={confirmPasswordHandler}
                        />
                        {confirmError && (
                            <p className={styles.errorMessage}>{confirmError}</p>
                        )}
                        <br />
                        <button
                            className="button button--red--absenden"
                            type="submit"
                            value="Register"
                            name="absendenbutton">Registration!
                        </button>
                    </div>
                    <p>
                        <span>If you already have a profile click <Link to="/login">Here</Link> </span>
                    </p>
                </form>
            </div>
        </section>
    )
};

export default Register;
