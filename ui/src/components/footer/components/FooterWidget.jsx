import React, { useState } from 'react';
import logo from "../../../images/logo.png";
import useWindowSize from '../../useWindowSize';

// Composant menu de navigation d'un bloc du footer
const FooterMenuItem = ({id, nav_title1, nav_title2, nav_title3, nav_title4}) => {
    return (
        <ul className="footer-menu-item" data-menu={id}>
            <li><a href="contact.html">{nav_title1}</a></li>
            <li><a href="contact.html">{nav_title2}</a></li>
            <li><a href="contact.html">{nav_title3}</a></li>
            <li><a href="contact.html">{nav_title4}</a></li>
        </ul>
    )
}

FooterMenuItem.defaultProps = {
    nav_title1: "Accueil",
    nav_title2: "Nos réalisation",
    nav_title3: "Votre projet",
    nav_title3: "A propos"
};

// Composant bloc de navigation du footer
const FooterWidget = ({id, title}) => {

    const [showMobileMenu, setShowMobileMenu] = useState(true);

    const openFooterMenu = (event) => {  
        setShowMobileMenu(true);
    }    
    
    const closeFooterMenu = (e) => {
        setShowMobileMenu(false);
    }

    // console.log(showMobileMenu);
    return ( 
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xlg-3" data-aos="fade-up" data-aos-duration={3500}>
            <div className="footer-widget logo-widget" >
                <div className={ showMobileMenu ? "title open-widget" : "title" } id="id" onClick={showMobileMenu == true ? closeFooterMenu : openFooterMenu} >
                    <h2>
                        {id == "open-menu-1" ? <a href="index.php" className="footer-logo"><img src={logo} alt=""/></a> : <h2>{title}.</h2> }
                    </h2>
                </div>

                { useWindowSize() <= 575 ?
                        showMobileMenu ? <FooterMenuItem id={id}/> : 
                        null :
                    null
                }

                {useWindowSize() >= 575 ?
                    <FooterMenuItem /> : null
                }
            </div>
        </div>
     );
}
 
export default FooterWidget;