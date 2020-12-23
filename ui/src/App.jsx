import React from 'react';
import Navbar from "./components/Navbar";
import "./css/header.css"
import "./css/footer.css"
import "./css/app.css"
import Header from "./components/Header";
import Banniere from './components/Banniere';
import Portfolio from './components/Portfolio';
import Product from './components/Product';
import Service from './components/Service';
import Footer from "./components/Footer";
import dislike from "./images/dislike.svg"
import like from "./images/like.svg"

const App = (props) => {
    return (  
        <>
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
        </>
    );
}
 
export default App;