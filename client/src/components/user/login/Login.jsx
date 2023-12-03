import { useContext } from "react";
import useForm from "../../../hooks/useForm";
import AuthContext from "../../../contexts/authContext";

import './login.css';
const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

const Login = () => {

    const {loginSubmitHandler} = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <section className="ontainer">
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
                    />
                    <div>
                    <input id="login-password"
                    type="password"
                    name={LoginFormKeys.Password}
                    placeholder="Your Password"
                    onChange={onChange}
                    value={values[LoginFormKeys.Password]}
                    />
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