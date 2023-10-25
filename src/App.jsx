import Footer from './components/Footer';
import Hauptmenu from './components/Hauptmenu';
import Header from './components/Header';
import MainLogo from './components/Main-Logo';
import MainRegister from './components/Register';
import SiteMainGerichte from './components/Site-Main-Gerichte';
import SiteMainGuest from './components/Site-Main-Guest';
import SiteMainTitle from './components/Site-Main-Title';
import Welcome from './components/Welcome';

function App() {

  return (
    <div>
        
        <Header />
        <Hauptmenu />
        <Welcome />
        <SiteMainTitle />
        <SiteMainGerichte />
        <SiteMainGuest />
        <MainRegister />
        <MainLogo />
        <Footer />

  {/* DAS-SIND-WIR-MOBILE */}
        <section className="leistungs__mobile">
            <div className="wrapper leistungs__article__mobile">
                <div className="leistungs__image">
                <img src="../public/img/grilled-burger.jpg" alt="" />
                </div>
                <div className="leistungs__text leistungs__text--right">
                    <h2>
                    <spann className="text-xs">Was ist</spann> BurgerHouse ?
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
                    <spann className="text-xs">Was ist</spann> BurgerHouse ?
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
        </section>



	{/* BESTELL-FORMULAR */}

        

        

        

	    {/* UNTERE-LOGO */}

        

	    {/* FOOTER */}

        
  </div>
  )
}

export default App;
