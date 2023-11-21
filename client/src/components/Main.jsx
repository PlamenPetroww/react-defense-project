import MainLogo from "./MainLogo";
import MainRegister from "./Register";
import SiteMainTitle from "./SiteMainTitle";
import Welcome from "./Welcome";
import { Route, Routes } from "react-router-dom";
import Create from "./Create";

const Main = () => {
    return (
        <>
            <Welcome />
            <SiteMainTitle />
            <MainRegister />
            <MainLogo />
        </>
    );
};

export default Main;
