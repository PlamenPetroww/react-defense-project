import {Routes, Route, useNavigate} from 'react-router-dom';

import {AuthProvider} from './contexts/authContext';
import Path from './paths';

import Footer from './components/footer/Footer';
import Hauptmenu from './components/hauptmenu/Hauptmenu';
import Header from './components/header/Header';
import GalleryList from './components/gallery/gallery-list/GalleryList';
import About from './components/about/About';
import Create from './components/create/Create';
import Main from './components/main/Main';
import RestaurantDetails from './components/restaurant-details/RestaurantDetails';
import RestaurantEdit from './components/restaurant-edit/RestaurantEdit';
import Register from './components/user/register/Register';
import Login from './components/user/login/Login';
import Logout from './components/user/logout/logout';
import NotFound from './components/Not-Found/Not-Found';
import AuthGuard from './components/guards/authGuard';

function App() {
    

  return (
      <>
        <AuthProvider>
        
            <Header />

            <Hauptmenu />
                <Routes>
                    <Route path={Path.Home} element={<Main />}/>
                    <Route path={Path.Gallery} element={<AuthGuard><GalleryList /></AuthGuard>}/>
                    <Route path={Path.Create} element={<AuthGuard><Create /></AuthGuard>}/>
                    <Route path={Path.About} element={<About />}/>
                    <Route path={Path.GalleryRestaurantId} element={<RestaurantDetails />} />
                    <Route path={Path.RestaurantEdit} element={<AuthGuard><RestaurantEdit /></AuthGuard>} />
                    <Route path={Path.Register} element={<Register />}/>
                    <Route path={Path.Login} element={<Login/>}/>
                    <Route path={Path.Logout} element={<Logout/>}/>
                    <Route path={Path.NotFound} element={<NotFound />} />
                </Routes>
            <Footer /> 
        </AuthProvider>
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
