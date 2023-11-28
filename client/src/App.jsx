import {Routes, Route} from 'react-router-dom';

import Footer from './components/Footer';
import Hauptmenu from './components/Hauptmenu';
import Header from './components/header/Header';
import Gallery from './components/gallery/Gallery';
import About from './components/About';
import Create from './components/Create';
import Main from './components/Main';
import RestaurantDetails from './components/restaurant-details/RestaurantDetails';
import Register from './components/user/register/Register';
import Login from './components/user/login/Login';
import { useState } from 'react';
import AuthContext from './contexts/authContext';

function App() {

    const [auth, setAuth] = useState({});

    const loginSubmitHandler = (values) => {

        console.log(values)
    }

  return (
      <>
        <AuthContext.Provider value={{loginSubmitHandler}}>
        
            <Header />

            <Hauptmenu />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/gallery" element={<Gallery />}/>
                    <Route path="/create" element={<Create />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/gallery/:restaurantId" element={<RestaurantDetails />} />
                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login/>}/>
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
