import React, { useState } from 'react';

// Composant du sidebar du bloc header
const HeaderSideNavBar = (props) => {

    // document.onclick = (event) => {
    //     var mySidebar = document.getElementById("mySidebar");
    //     if(mySidebar != event.target){
    //         alert("hello change");
    //         props.handleClickHideSideBar();
    //     }
    // }

    return (
        <div className="wrap-side-bar" id="wrap-mySidebar">
            <div id="mySidebar" className="sidebar">
                <span class="closebtn" onClick={props.handleClickHideSideBar}>×</span>
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
     );
}
 
export default HeaderSideNavBar;