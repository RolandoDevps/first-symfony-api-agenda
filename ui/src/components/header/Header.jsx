import React, { useState } from 'react';
import HeaderCenter from "./components/HeaderCenter"
import HeaderRight from './components/HeaderRight';
import HeaderSearchForm from './components/HeaderSearchForm';
import HeaderSideNavBar from './components/HeaderSideNavBar';
import logo from "../../images/logo.png";

const Header = (props) => {

    const [showSearchForm, setShowSearchForm]= useState(false);
    const [showSideBar, setShowSideBar]= useState(false);

    const handleClickToShowSearchForm = function(e){
        e.preventDefault();
        setShowSearchForm(true);
    }

    const handleClickToHideSearchForm = function(e){
        e.preventDefault();
        setShowSearchForm(false);
    }

    const handleClickToShowSideBar = function(e){
        e.preventDefault();
        setShowSideBar(true);
    }

    const handleClickToHideSideBar = function(e){
        e.preventDefault();
        setShowSideBar(false);
    }

    window.onscroll = () => {
        var wrapper_header= document.getElementById("wrapper_header");
        var sticky = 420;
        if (window.pageYOffset >= sticky) {
            wrapper_header.classList.add("sticky");
        } else {
            wrapper_header.classList.remove("sticky");
        }
    };

    // window.onclick = function(event) {
    //     var mySidebar = document.getElementById("mySidebar");
    //     var openNav = document.getElementById("openNav");
    //     var wrap_mySidebar = document.getElementById("wrap-mySidebar");

    //     // if (event.target !== mySidebar && event.target !== openNav) {
    //     //     wrap_mySidebar.style.display = "none";
    //     // }

    //     if (mySidebar !== event.target && !(mySidebar.has(event.target).length) && openNav != event.target && !(openNav.has(event.target).length)) {
    //         if(!(wrap_mySidebar.style.display == "none")){
    //             wrap_mySidebar.style.display = "none";
    //         }
    //     }
    // }

    return ( 
        <div className="wrapper-header" id="wrapper_header">
            <div className="container">
                <div className="row wrap-header">
                    <div className="col-2 logo-header">
                        <a className="wrap-logo" href="./index.html">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    {
                        showSearchForm ? null : <HeaderCenter /> 
                    }
                    {/* <div className="col-6 toggle-display-none space-between" style={{display: 'none'}} /> */}
                    {
                        showSearchForm ? null : <HeaderRight handleClickShow={handleClickToShowSearchForm} handleClickShowSideBar={handleClickToShowSideBar}/>
                    }
                    {
                        showSearchForm ? <HeaderSearchForm handleClickHide={handleClickToHideSearchForm}/> : null
                    }
                </div>
            </div> 
            {/* {console.log(showSideBar)} */}
            {
                showSideBar ? <HeaderSideNavBar handleClickHideSideBar={handleClickToHideSideBar} /> : null
            }
        </div>

    );
}
 
export default Header;