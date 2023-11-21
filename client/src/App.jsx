
import Footer from './components/Footer';
import Hauptmenu from './components/Hauptmenu';
import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './components/About';
import Contacts from './components/Contacts';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
        
        <Header />

        <Hauptmenu />
            <Routes>
                {/* Tuk predi vmesto * imashe /, da ne e nqkakwa greshka ? <Route path="*" element={<Main />}/> */}
                <Route path="*" element={<Main />}/>
                <Route path="/gallery" element={<Gallery />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contacts" element={<Contacts />}/>
            </Routes>
        <Footer /> 
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
