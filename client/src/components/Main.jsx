import Hauptmenu from "./Hauptmenu";
import MainLogo from "./MainLogo";
import MainRegister from "./Register";
import SiteMainTitle from "./SiteMainTitle";
import ListProducts from "./ListProducts";
import Welcome from "./Welcome";
import ProductListItem from "./ProductListItem";


const Main = () => {
    return(
        <div>
        <Hauptmenu />
        <Welcome />
        <SiteMainTitle />
        <ProductListItem />
        <ListProducts />
        <MainRegister />
        <MainLogo />
        </div>
    );
};

export default Main;