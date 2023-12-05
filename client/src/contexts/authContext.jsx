import { createContext, useState } from "react";
import {useNavigate} from 'react-router-dom';

import * as authService from '../services/authService';
import Path from '../paths';

const AuthContext =  createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [authError, setAuthError] = useState(null);
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    // const loginSubmitHandler = async (values) => {
        
    //     const result = await authService.login(values.email, values.password);
        
    //     setAuth(result);
        
    //     localStorage.setItem('accessToken', result.accessToken);

    //     navigate(Path.Home);
    // };

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);
            
            setAuth(result);
            
            localStorage.setItem('accessToken', result.accessToken);

            navigate(Path.Home);
        } catch (error) {
            console.error('error', error.message);
            setAuthError(error.message);
            if (error.status === 403) {
                alert('Incorrect password. Please try again.');
            } else {
                alert('Incorrect password. Please try again.');
            }
        }
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password)
        
        setAuth(result)

        localStorage.setItem('accessToken', result.accessToken);
    
        navigate(Path.Home)
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    //Trqbwa da si sloja nqkaude i valudaciq dali confirm password otgovarq na password

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export  default AuthContext;