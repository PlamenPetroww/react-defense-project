import useForm from "../../../hooks/useForm";

const Login = () => {

    const {values, onChange, onSubmit} = useForm({
        email: '',
        password: '',
    });
    
    return (
        <section className="ontainer">
            <div className="anmelden__tok">
                <h2 className="anmelden">You can loged</h2>
            </div>
            <div className="formular">
                <form id="kontakt-formular" onSubmit={onSubmit}>
                    <div className="kontakt-formular-center">
                    <label htmlFor="email" className="screenreader" />
                    <input
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="Your Email"
                    onChange={onChange}
                    value={values.email}
                    />
                    <div>
                    <label htmlFor="nachname" className="screenreader" />
                    <input id="login-password"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\u0022(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\u0022)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
                    title="Gib eine gültige E-Mail Adresse ein!"
                    onChange={onChange}
                    value={values.password}
                    />
                    </div>
                    <button
                    className="button button--red--absenden"
                    type="submit"
                    name="absendenbutton">Registration!</button>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Login;