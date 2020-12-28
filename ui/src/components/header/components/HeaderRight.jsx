import React from 'react';
import menu from "../../../images/menu.svg";
import search from "../../../images/search.svg";
import login from "../../../images/avatar.svg";
import logout from "../../../images/login.svg";

// Composant affiché à droite du bloc header
const HeaderRight = (props) => {

    return ( 
        <div className="col-4 header-right toggle-display-none">
            <div className="menu-icon toggle-menu-nav-side-show" id="openNav" onClick={props.handleClickShowSideBar}>
                <span className="toggle-menu-nav" id="toggle-menu">
                    <img src={menu} alt="Menu" />
                </span>
            </div>
            <div className="essai toggle-menu-nav-side-hide">
                <a href>
                    <span>Try &amp; Buy</span>
                </a>
            </div>
            <div className="search-area" onClick={props.handleClickShow}>
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
    );
}
 
export default HeaderRight;