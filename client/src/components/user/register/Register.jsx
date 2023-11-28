import { useContext } from "react";

import AuthContext from "../../../contexts/authContext";
import useForm from "../../../hooks/useForm";

import './register.css';

const Register = () => {

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

    return (
        <section className="ontainer">
            <div className="anmelden__tok">
                <h2 className="anmelden"> Take your register Profile</h2>
            </div>
            <div className="formular">
                <form id="kontakt-formular" onSubmit={onSubmit}>
                    <div className="kontakt-formular-center">
                    <label htmlFor="email" className="screenreader">Email:</label>
                        <input 
                        id="email" 
                        type="email"
                        name="email"
                        placeholder="Your Email" 
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="screenreader">Password</label>
                        <input id="register-password"
                        type="password"
                        name="password"
                        /* pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\u0022(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\u0022)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
                        title="Gib eine gültige E-Mail Adresse ein!" */
                        placeholder="Password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                        />
                    </div>
                    <div>
                        <label htmlFor="con-pass">Confirm Password</label>
                        <input 
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />
                    <button
                    className="button button--red--absenden"
                    type="submit"
                    value="Register"
                    name="absendenbutton">Registration!</button>
                    </div>
                    <p>
                        <span>If you already have profile click <a href="">Here</a> </span>
                    </p>
                </form>
            </div>
        </section>
    )
};

export default Register;