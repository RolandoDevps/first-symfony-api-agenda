import React from 'react';
import bg_animation1 from "../images/bg-ban-an1.png";
import bg_animation2 from "../images/bg-ban-an2.png";
import bg_animation3 from "../images/bg-ban-an3.png";
import bg_animation4 from "../images/bg-ban-an4.png";
import bg_animation5 from "../images/bg-ban-an5.png";
import bg_animation6 from "../images/bg-ban-an6.png";
import bg_animation7 from "../images/bg-ban-an7.png";
import bg_animation8 from "../images/bg-ban-an8.png";
import bg_animation9 from "../images/bg-ban-an9.png";
import bg_animation10 from "../images/bg-ban-an10.png";
import bg_animation11 from "../images/bg-ban-an11.png";
import bg_animation12 from "../images/bg-ban-an12.png";
import bg_animation13 from "../images/bg-ban-an13.png";

const Banniere = (props) => {
    return ( 
        <div className="wrapper-banniere">
            <div className="annimation-banniere">
                <div className="wrap-annimation">
                    <ul>
                        <li><img src={bg_animation1} alt /></li>
                        <li><img src={bg_animation2} alt /></li>
                        <li><img src={bg_animation3} alt /></li>
                        <li><img src={bg_animation4} alt /></li>
                        <li><img src={bg_animation5} alt /></li>
                        <li><img src={bg_animation6} alt /></li>
                        <li><img src={bg_animation7} alt /></li>
                        <li><img src={bg_animation8} alt /></li>
                        <li><img src={bg_animation9} alt /></li>
                        <li><img src={bg_animation10} alt /></li>
                        <li><img src={bg_animation11} alt /></li>
                        <li><img src={bg_animation12} alt /></li>
                        <li><img src={bg_animation13} alt /></li>
                    </ul>
                </div>
            </div>
            <div className="wrap-banniere">
                <div className="breacktrumps">
                    <small>Home</small>
                    <p>SERVICES</p>
                </div>
                <div className="text-banniere col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-5">
                    <h3>MKBID Providing Business Services</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Banniere;