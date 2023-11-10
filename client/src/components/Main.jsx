import Hauptmenu from "./Hauptmenu";
import MainLogo from "./MainLogo";
import MainRegister from "./Register";
import SiteMainTitle from "./SiteMainTitle";
import ListProducts from "./ListProduts";
import Welcome from "./Welcome";


const Main = () => {
    return(
        <div>
        <Hauptmenu />
        <Welcome />
        <SiteMainTitle />
        <ListProducts />
        <MainRegister />
        <MainLogo />
        </div>
    );
};

export default Main;