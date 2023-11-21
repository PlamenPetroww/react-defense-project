import MainLogo from "./MainLogo";
import MainRegister from "./user/register/Register";
import SiteMainTitle from "./SiteMainTitle";
import Welcome from "./Welcome";

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
