import React, { useState } from 'react';;
import FooterWidget from "./components/FooterWidget";
import logo from "../../images/logo.png"

// Composant principal du bloc footer
const Footer = (props) => {

    return ( 
        <div className="wrapper-footer">
            <div className="container">
                <div className="row footer-bloc">
                    <FooterWidget id="open-menu-1"/>
                    <FooterWidget id="open-menu-2" title="Links" />
                    <FooterWidget id="open-menu-3" title="About Us"/>
                    <FooterWidget id="open-menu-4" title="Contact Us"/>
                </div>
                <div className="bottom-footer">
                    <div className="row">
                        <div className="col footer-logo">
                            <a className="footer-logo" href="./index.html">
                                <img src={logo} alt="SAP" />
                            </a>
                        </div>
                        <div className="col footer-links">
                            <span className="accroche-links">Find us on </span>
                            <ul className="social-links">
                                <li><a href="contact.html"><span className="fa fa-facebook-f" /></a></li>
                                <li><a href="contact.html"><span className="fa fa-twitter" /></a></li>
                                <li><a href="contact.html"><span className="fa fa-linkedin" /></a></li>
                                <li><a href="contact.html"><span className="fa fa-pinterest-p" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Footer;