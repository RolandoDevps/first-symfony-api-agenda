import React, { useState } from 'react';

const HeaderSideNavBar = (props) => {

    document.onclick = (event) => {
        var mySidebar = document.getElementById("mySidebar");
        // var openNav = document.getElementById("openNav");
        if(mySidebar != event.target){
            // alert("hello change");
            props.handleClickHideSideBar
        }
    }

    return (
        <div className="wrap-side-bar" id="wrap-mySidebar">
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
     );
}
 
export default HeaderSideNavBar;