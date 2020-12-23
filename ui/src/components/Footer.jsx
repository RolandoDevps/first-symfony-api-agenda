import React from 'react';

const Footer = (props) => {
    return ( 
        <div className="wrapper-footer">
            <div className="container">
                <div className="row footer-bloc">
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xlg-3" data-aos="fade-up" data-aos-duration={3500}>
                    <div className="footer-widget logo-widget">
                    <div className="title" id="open-menu-1" onclick="var idelt=this.id; openFooterMenu(idelt)"><h2><a href="index.php">MK BID</a></h2></div>
                    {/* <div class="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis pariatur laudantium facilis non aspernatur! Inventore, ullam placeat similique in, dolor, molestiae molestias unde nulla magnam quae et cum quod.</p></div> */}
                    <ul className="footer-menu-item" data-menu="open-menu-1">
                        <li><a href="contact.html">Accueil</a></li>
                        <li><a href="contact.html">Nos réalisation</a></li>
                        <li><a href="contact.html">Votre projet</a></li>
                        <li><a href="contact.html">A propos</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xlg-3" data-aos="fade-up" data-aos-duration={3000}>
                    <div className="footer-widget links-widget">
                    <div className="title" id="open-menu-2" onclick="var idelt=this.id; openFooterMenu(idelt)"><h2>Links.</h2></div>
                    <ul className="footer-menu-item" data-menu="open-menu-2">
                        <li><a href="contact.html">Accueil</a></li>
                        <li><a href="contact.html">Nos réalisation</a></li>
                        <li><a href="contact.html">Votre projet</a></li>
                        <li><a href="contact.html">A propos</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xlg-3" data-aos="fade-up" data-aos-duration={2500}>
                    <div className="footer-widget about-widget">
                    <div className="title" id="open-menu-3" onclick="var idelt=this.id; openFooterMenu(idelt)"><h2>About Us.</h2></div>
                    <ul className="footer-menu-item" data-menu="open-menu-3">
                        <li><a href="contact.html">Accueil</a></li>
                        <li><a href="contact.html">Nos réalisation</a></li>
                        <li><a href="contact.html">Votre projet</a></li>
                        <li><a href="contact.html">A propos</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xlg-3" data-aos="fade-up" data-aos-duration={3000}>
                    <div className="footer-widget contact-widget">
                    <div className="title" id="open-menu-4" onclick="var idelt=this.id; openFooterMenu(idelt)"><h2>Contact Us.</h2></div>
                    {/* <div class="text"><p>like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum sites still in their</p></div> */}
                    <ul className="footer-menu-item" data-menu="open-menu-4">
                        <li><a href="contact.html">Accueil</a></li>
                        <li><a href="contact.html">Nos réalisation</a></li>
                        <li><a href="contact.html">Votre projet</a></li>
                        <li><a href="contact.html">A propos</a></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="bottom-footer">
                <div className="row">
                    <div className="col footer-logo">
                    <a className="wrap-logo" href="./index.html">
                        <img src="images/logo.svg" alt="SAP" />
                    </a>
                    </div>
                    <div className="col footer-links">
                    {/* <div class="wrap-links"> */}
                    <span className="accroche-links">Find us on </span>
                    <ul className="social-links">
                        <li><a href="contact.html"><span className="fa fa-facebook-f" /></a></li>
                        <li><a href="contact.html"><span className="fa fa-twitter" /></a></li>
                        <li><a href="contact.html"><span className="fa fa-linkedin" /></a></li>
                        <li><a href="contact.html"><span className="fa fa-pinterest-p" /></a></li>
                    </ul>
                    {/* </div> */}
                    </div>
                </div>
                </div>
            </div>
        </div>

     );
}
 
export default Footer;