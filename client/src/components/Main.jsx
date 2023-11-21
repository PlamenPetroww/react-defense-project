import MainLogo from "./MainLogo";
import MainRegister from "./Register";
import SiteMainTitle from "./SiteMainTitle";
import Welcome from "./Welcome";
import ProductListItem from "./ProductListItem";
import { Route, Routes } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import Create from "./Create";


const Main = () => {
    return (
        <>
            {/* <main> */}
            <Welcome />
            <SiteMainTitle />
            <ProductListItem />
                <Routes>
                    <Route path="/create" element={<CreateProduct />} />
                </Routes>
            <MainRegister />
            <MainLogo />
            {/* </main> */}
        </>
    );
};

export default Main;
