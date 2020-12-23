import React from 'react';
import service2 from "../images/service-2.svg"

const Service = (props) => {
    return ( 
        <div className="wrapper-services">
            <div className="container bloc-services">
                <div className="scale-spinner-effect right">
                <div className="scale-spinner-circle circle-1" />
                <div className="scale-spinner-circle circle-2" />
                </div>
                <div className="row">
                <div className="wrap-title-bloc">
                    <h3>Technology and Innovation</h3>
                    <p>In the digital age, business leaders must stay on top of new, emerging, and future technologies or risk falling behind. But where do you start? Explore the latest digital trends to determine the best opportunities for your company.</p>
                </div>
                </div>
                <div id="carouselServicesControls" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" style={{display: 'none'}}>
                    <li data-target="#carouselServicesControls" data-slide-to={0} className="active" />
                    <li data-target="#carouselServicesControls" data-slide-to={1} />
                    <li data-target="#carouselServicesControls" data-slide-to={2} />
                    <li data-target="#carouselServicesControls" data-slide-to={3} />
                    <li data-target="#carouselServicesControls" data-slide-to={4} />
                    <li data-target="#carouselServicesControls" data-slide-to={5} />
                </ol>
                <div className="wrap-service">
                    <div className="responsive-show item active" data-aos="fade-up" data-aos-delay={50} data-aos-duration={4000}>
                    <div className="col bloc-service">
                        <div className="service-logo">
                        <div className="wrap-logo">
                            <img src={service2} alt />
                        </div>
                        </div>
                        <div className="wrap-brief">
                        <div className>
                            <h3>Managment &amp; Marketing</h3>
                        </div>
                        <div className>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                        </div>
                        </div>
                        <div className="service-details">
                        <a href>Learn more <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-show item" data-aos="fade-up" data-aos-delay={150} data-aos-duration={1500}>
                    <div className="col bloc-service">
                        <div className="service-logo">
                        <div className="wrap-logo ">
                            <img src={service2} alt />
                        </div>
                        </div>
                        <div className="wrap-brief ">
                        <div className>
                            <h3>Technical SEO Audit</h3>
                        </div>
                        <div className>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                        </div>
                        </div>
                        <div className="service-details">
                        <a href>Learn more <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-show item" data-aos="fade-up" data-aos-delay={200} data-aos-duration={2500}>
                    <div className="col bloc-service">
                        <div className="service-logo">
                        <div className="wrap-logo ">
                            <img src={service2} alt />
                        </div>
                        </div>
                        <div className="wrap-brief ">
                        <div className>
                            <h3>Reports &amp; Analytics</h3>
                        </div>
                        <div className>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                        </div>
                        </div>
                        <div className="service-details">
                        <a href>Learn more <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-show item" data-aos="fade-up" data-aos-delay={250} data-aos-duration={2000}>
                    <div className="col bloc-service">
                        <div className="service-logo">
                        <div className="wrap-logo ">
                            <img src={service2} alt />
                        </div>
                        </div>
                        <div className="wrap-brief ">
                        <div className>
                            <h3>Strategy &amp; Research</h3>
                        </div>
                        <div className>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                        </div>
                        </div>
                        <div className="service-details">
                        <a href>Learn more <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-show item" data-aos="fade-up" data-aos-delay={300} data-aos-duration={3000}>
                    <div className="col bloc-service">
                        <div className="service-logo">
                        <div className="wrap-logo ">
                            <img src={service2} alt />
                        </div>
                        </div>
                        <div className="wrap-brief ">
                        <div className>
                            <h3>Onsite SEO</h3>
                        </div>
                        <div className>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                        </div>
                        </div>
                        <div className="service-details">
                        <a href>Learn more <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-show item" data-aos="fade-up" data-aos-delay={350} data-aos-duration={3500}>
                    <div className="col bloc-service">
                        <div className="service-logo">
                        <div className="wrap-logo ">
                            <img src={service2} alt />
                        </div>
                        </div>
                        <div className="wrap-brief ">
                        <div className>
                            <h3>Reports &amp; Analytics</h3>
                        </div>
                        <div className>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium, animi modi porro obcaecati quis mollitia possimus placeat culpa.</p>
                        </div>
                        </div>
                        <div className="service-details">
                        <a href>Learn more <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

     );
}
 
export default Service;