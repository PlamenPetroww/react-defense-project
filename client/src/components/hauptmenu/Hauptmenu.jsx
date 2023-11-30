import { Link } from "react-router-dom";

import './hauptmenu.css';
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
const Hauptmenu = () => {
            
    const {
        isAuthenticated
    } = useContext(AuthContext)

    return (
        
        <section>
            
            <div className="hauptmenu">
                <Link to="/" className="no-underline"><p>Home</p></Link>
                <span>✶</span>
                {isAuthenticated && (
                <Link to="/gallery" className="no-underline"><p>Gallery</p></Link>
                )}
                <h1 className="logo">
                <div className="logo-1">
                    <div className="bolded">
                        Find Restaurant<span></span>
                    </div>
                    <div className="kl-logo">
                        take &amp; live your magic
                    </div>
                </div>
                </h1>
                {isAuthenticated && (
                <Link to="/create" className="no-underline"><p>Create</p></Link>
                )}
                <span>✶</span>
                <Link to="/about" className="no-underline"><p>About Us</p></Link>
            </div>
        </section>
    )
};

export default Hauptmenu;