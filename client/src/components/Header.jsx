const Header = () => {
    return (
        <div className="wrapper__nav">
            <div className="wrapper-media">
                <ul>
                    <li><a className="wrapper-media-sl" href="https://www.twitter.com/">
                    <i className="fab fa-twitter icons fa-2x"></i>
                </a></li>
                    <li><a className="wrapper-media-sl" href="https://www.instagram.com/">
                    <i className="fab fa-instagram icons fa-2x"></i>
                </a></li>
                    <li><a className="wrapper-media-sl" href="https://www.facebook.com/">
                    <i className="fab fa-facebook icons fa-2x"></i>
                </a></li>
                    <li><a className="wrapper-media-sl" href="https://www.tik-tok.com/">
                    <i className="fab fa-tiktok icons fa-2x"></i>
                </a></li>
                </ul>
                </div>
            <div className="wagen">🛒Nimm (2) produkte für 30,00 €
            </div>
        </div>
    )
};

export default Header;