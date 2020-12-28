import React from 'react';
import Navbar from "./components/Navbar";
import "./css/header.css"
import "./css/footer.css"
import "./css/app.css"

import Header from "./components/header/Header";
import Banniere from './components/Banniere';
import Portfolio from './components/Portfolio';
import Product from './components/Product';
import Service from './components/Service';
import Footer from "./components/footer/Footer";

import dislike from "./images/dislike.svg"
import like from "./images/like.svg"

import useWindowSize from "./components/useWindowSize"

// Page index 
const App = (props) => {

    const checkBlocWidth = () => {
        var blocToChange = document.getElementsByClassName("wrap-service");
        var blocResponsive = document.getElementsByClassName("responsive-show");
        if (useWindowSize() <= 768)
        {
            for (var i=0; i<blocToChange.length; i++) {
                blocToChange.item(i).classList.add('carousel-inner');
            }
            for (var i=0; i<blocResponsive.length; i++) {
                blocResponsive.item(i).classList.add('carousel-item');
            }
        }
        else{
            for (var i=0; i<blocToChange.length; i++) {
                blocToChange[i].classList.remove('carousel-inner');
            }
            for (var i=0; i<blocResponsive.length; i++) {
                blocResponsive[i].classList.remove('carousel-item');
            }
        }
    }

    return (  
        <div className="wrapper-body"  id="main">
            {checkBlocWidth()}
            <Header/>
            <Banniere/>
            <Portfolio/>
            <div class="wrapper-section-divider paddingTop">
                <div class="section-divider"></div>
            </div>
            <Product/>
            <div class="wrapper-section-divider">
                <div class="section-divider"></div>
            </div>
            <Service/>
            <div class="wrapper-section-divider">
                <div class="section-divider"></div>
            </div>
            <div className="Wrapper-exp-page">
                <div className="row">
                    <h4 className="exp-title">How is your experience with this page?</h4>
                    <div className="wrap-exp-page">
                        <span className="like-page">
                            <img src={like} alt />
                        </span>
                        <span className="dislike-page">
                            <img src={dislike} alt />
                        </span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default App;