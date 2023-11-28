import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Footer from './components/footer/Footer';
import Hauptmenu from './components/hauptmenu/Hauptmenu';
import Header from './components/header/Header';
import GalleryList from './components/gallery/gallery-list/GalleryList';
import About from './components/about/About';
import Create from './components/create/Create';
import Main from './components/main/Main';
import RestaurantDetails from './components/restaurant-details/RestaurantDetails';
import Register from './components/user/register/Register';
import Login from './components/user/login/Login';
import Logout from './components/user/logout/logout';

function App() {
    const navigate = useNavigate();

    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (values) => {
        // I tuk shte mi trqbwa da imam try catch
        const result = await authService.login(values.email, values.password);
        
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
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
        isAuthenticated: !!auth.accessToken,
    }

  return (
      <>
        <AuthContext.Provider value={values}>
        
            <Header />

            <Hauptmenu />
                <Routes>
                    <Route path={Path.Home} element={<Main />}/>
                    <Route path="/gallery" element={<GalleryList />}/>
                    <Route path="/create" element={<Create />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/gallery/:restaurantId" element={<RestaurantDetails />} />
                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path={Path.Logout} element={<Logout/>}/>
                </Routes>
            <Footer /> 
        </AuthContext.Provider>
  </>
  )
}

export default App;

{/* DAS-SIND-WIR-MOBILE */}
        {/* <section className="leistungs__mobile">
            <div className="wrapper leistungs__article__mobile">
                <div className="leistungs__image">
                <img src="../public/img/grilled-burger.jpg" alt="" />
                </div>
                <div className="leistungs__text leistungs__text--right">
                    <h2>
                    <span className="text-xs">Was ist</span> BurgerHouse ?
                    </h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </p>
                <button className="button button--solid">Schaue mehr ..</button>
                </div>
                <div className="wrapper leistungs__article__mobile">
                    <div className="leistungs__image">
                        <img src="../public/img/grilled-burger.jpg" alt="" />
                    </div>
                <div className="leistungs__text leistungs__text--right">
                    <h2>
                    <span className="text-xs">Was ist</span> BurgerHouse ?
                    </h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </p>
                <button className="button button--solid">Schaue mehr ..</button>
            </div>
        </section> */}
