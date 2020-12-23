import React from 'react';
import product1 from "../images/product1.png"
import product2 from "../images/product2.png"

const Product = () => {
    return ( 
        <>
            <div className="wrapper-product">
                <div className="scale-spinner-effect left">
                    <div className="scale-spinner-circle circle-1" />
                    <div className="scale-spinner-circle circle-2" />
                </div>
                <div className="container bloc-product">
                    <div className="row">
                        <div className="wrap-title-bloc">
                            <h3>Featured Products</h3>
                            <p>Find the right products to enable digital transformation across your enterprise and run business-critical processes quickly and securely in the cloud – today and as your business needs evolve.</p>
                        </div>
                    </div>
                    <div className="wrap-product">
                        <div className="bloc-product">
                            <div className="product-logo" data-aos="fade-up" data-aos-delay={50} data-aos-anchor-placement="center-bottom">
                                <div className="wrap-logo-product">
                                    <img src={product1} alt />
                                </div>
                            </div>
                            <div className="wrap-brief" data-aos="fade-right">
                                <div className>
                                    <h3>SAP S/4HANA</h3>
                                </div>
                                <div className>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                                </div>
                            </div>
                            <div className="wrap-see-more-product" data-aos="fade-right">
                                <a href>SAP S/4HANA</a>
                            </div>
                        </div>
                        <div className="bloc-product">
                            <div className="product-logo" data-aos="fade-up" data-aos-delay={50} data-aos-anchor-placement="center-bottom">
                                <div className="wrap-logo-product">
                                    <img src={product2} alt />
                                </div>
                            </div>
                            <div className="wrap-brief" data-aos="fade-left">
                                <div className>
                                    <h3>SAP Cloud Platform</h3>
                                </div>
                                <div className>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                                </div>
                            </div>
                            <div className="wrap-see-more-product" data-aos="fade-left">
                                <a href>SAP Cloud Platform</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="wrapper-services">
                <div id="carouselProductControls" className="carousel slide container" data-ride="carousel">
                    <ol className="carousel-indicators" style={{display: 'none'}}>
                        <li data-target="#carouselProductControls" data-slide-to={0} className="active" />
                        <li data-target="#carouselProductControls" data-slide-to={1} />
                        <li data-target="#carouselProductControls" data-slide-to={2} />
                        <li data-target="#carouselProductControls" data-slide-to={3} />
                        <li data-target="#carouselProductControls" data-slide-to={4} />
                        <li data-target="#carouselProductControls" data-slide-to={5} />
                    </ol>
                    <div className="wrap-service">
                        <div className="responsive-show item active" data-aos="fade-up" data-aos-delay={50} data-aos-duration={4000}>
                            <div className="col bloc-service">
                                <div className="wrap-brief">
                                    <div className>
                                        <h3>SAP HANA</h3>
                                    </div>
                                    <div className>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                                    </div>
                                </div>
                                <div className="service-details">
                                    <a href>SAP HANA <i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="responsive-show item" data-aos="fade-up" data-aos-delay={150} data-aos-duration={1500}>
                            <div className="col bloc-service">
                                <div className="wrap-brief ">
                                    <div className>
                                        <h3>Concur Expense</h3>
                                    </div>
                                    <div className>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                                    </div>
                                </div>
                                <div className="service-details">
                                    <a href>Concur Expense <i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="responsive-show item" data-aos="fade-up" data-aos-delay={200} data-aos-duration={2500}>
                            <div className="col bloc-service">
                                <div className="wrap-brief ">
                                    <div className>
                                        <h3>SAP Ariba Strategic Sourcing Suite</h3>
                                    </div>
                                    <div className>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                                    </div>
                                </div>
                                <div className="service-details">
                                    <a href>SAP Ariba Strategic Sourcing Suite <i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="responsive-show item" data-aos="fade-up" data-aos-delay={250} data-aos-duration={2000}>
                            <div className="col bloc-service">
                                <div className="wrap-brief ">
                                    <div className>
                                        <h3>SAP BusinessObjects Business Intelligence Suite</h3>
                                    </div>
                                    <div className>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                                    </div>
                                </div>
                                <div className="service-details">
                                    <a href>SAP BusinessObjects Business Intelligence Suite <i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="responsive-show item" data-aos="fade-up" data-aos-delay={300} data-aos-duration={3000}>
                            <div className="col bloc-service">
                                <div className="wrap-brief ">
                                    <div className>
                                        <h3>SAP Commerce Cloud</h3>
                                    </div>
                                <div className>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                                </div>
                            </div>
                            <div className="service-details">
                                <a href>SAP Commerce Cloud <i className="fa fa-angle-right" /></a>
                            </div>
                        </div>
                    </div>
                        <div className="responsive-show item" data-aos="fade-up" data-aos-delay={350} data-aos-duration={3500}>
                            <div className="col bloc-service">
                                <div className="wrap-brief ">
                                    <div className>
                                        <h3>SAP SuccessFactors Employee Central</h3>
                                    </div>
                                    <div className>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                                    </div>
                                </div>
                                <div className="service-details">
                                    <a href>SAP SuccessFactors Employee Central <i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );   
}
 
export default Product;