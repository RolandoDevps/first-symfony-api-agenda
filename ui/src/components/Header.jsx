import React from 'react';
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import search from "../images/search.svg";
import login from "../images/avatar.svg";
import logout from "../images/login.svg";
import close from "../images/close-button.svg";

const Header = (props) => {
    return ( 
        <div className="wrapper-header" id="wrapper_header">
            <div className="container">
                <div className="row wrap-header">
                <div className="col-2 logo-header">
                    <a className="wrap-logo" href="./index.html">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="col-6 header-center toggle-display-none menu-mobile-display-none">
                    <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link" href>
                            <span className="menu-title">Accueil</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href>
                            <span className="menu-title">Services</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href>
                            <span className="menu-title">Pricing</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href>
                            <span className="menu-title">Training</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href>
                            <span className="menu-title">About</span>
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="col-6 toggle-display-none space-between" style={{display: 'none'}} />
                <div className="col-4 header-right toggle-display-none">
                    <div className="menu-icon toggle-menu-nav-side-show" id="openNav">
                    <span className="toggle-menu-nav" id="toggle-menu">
                        <img src={menu} alt="Menu" />
                    </span>
                    </div>
                    <div className="essai toggle-menu-nav-side-hide">
                    <a href>
                        <span>Try &amp; Buy</span>
                    </a>
                    </div>
                    <div className="search-area">
                    <span className="toggle-search-form" id="toggle-search">
                        <img src={search} alt="Search" />
                    </span>
                    </div>
                    <div className="login">
                    <span>
                        <img src={login} alt="Login" />
                    </span>
                    </div>
                    <div className="logout">
                    <span>
                        <img src={logout} alt="Logout" />
                    </span>
                    </div>
                </div>
                <div className="col-10 header-search toggle-display-flex" style={{display: 'none'}}>
                    <div className="search-form">
                    <form action>
                        <button type="submit"> 
                        <span>
                            <img src={search} alt="Search" />
                        </span>
                        </button>
                        <input type="text" name id placeholder="Search" />
                    </form>
                    </div>
                    <div className="close-search-form">
                    <span>
                        <img src={close} alt="Close"/>
                    </span>
                    </div>
                </div>
                </div>
            </div> 
            <div className="wrap-side-bar">
                <div id="mySidebar" className="sidebar">
                {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> */}
                <ul className="sidebar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href>
                        <span className="menu-title">Accueil</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href>
                        <span className="menu-title">Services</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href>
                        <span className="menu-title">Pricing</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href>
                        <span className="menu-title">Training</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href>
                        <span className="menu-title">About</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>

    );
}
 
export default Header;