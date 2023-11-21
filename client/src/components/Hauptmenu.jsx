import { Link } from "react-router-dom";

       
const Hauptmenu = () => {
            
    return (
        
        <section>
            
            <div className="hauptmenu">
                <Link to="/" className="no-underline"><p>Home</p></Link>
                <span>✶</span>
                <Link to="/gallery" className="no-underline"><p>Gallery</p></Link>
                <h1 className="logo">
                <div className="logo-1">
                    <div className="bolded">
                        BURGER HOUSE<span></span>
                    </div>
                    <div className="kl-logo">
                        slow &amp; burger station
                    </div>
                </div>
                </h1>
                <Link to="/about" className="no-underline"><p>About Us</p></Link>
                <span>✶</span>
                <Link to="/contacts" className="no-underline"><p>Contacts</p></Link>
            </div>
        </section>
    )
};

export default Hauptmenu;