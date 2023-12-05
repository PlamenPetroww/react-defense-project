import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

import './header.css';

const Header = () => {

    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

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
                {isAuthenticated && (
                <div className="username">
                    <span>Logged as: {username}</span>
                </div>
                )}
            {isAuthenticated && (
                <div className="login">
                <ul>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
            )}
            {!isAuthenticated && (
                <div className="login">
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
            )}
        </div>
    )
};

export default Header;