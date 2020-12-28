import React from 'react';


// Composant du bloc portfolio
const Portfolio = (props) => {
    return ( 
        <div className="wrapper-portfolio">
            <div className="container bloc-portfolio">
                <div className="row">
                <div className="wrap-title-bloc">
                    <h3>Portfolio Categories</h3>
                    <p>Explore our comprehensive solutions for all business processes across all industries to find the solutions you need to run your business better, faster, and simpler enterprise-wide.</p>
                </div>
                </div>
                <div id="carouselPortfolioControls" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" style={{display: 'none'}}>
                    <li data-target="#carouselPortfolioControls" data-slide-to={0} className="active" />
                    <li data-target="#carouselPortfolioControls" data-slide-to={1} />
                    <li data-target="#carouselPortfolioControls" data-slide-to={2} />
                    <li data-target="#carouselPortfolioControls" data-slide-to={3} />
                    <li data-target="#carouselPortfolioControls" data-slide-to={4} />
                    <li data-target="#carouselPortfolioControls" data-slide-to={5} />
                </ol>
                <div className="wrap-service">
                    <div className="responsive-show item active" data-aos="fade-down" data-aos-duration={1500}>
                    <div className="col bloc-service">
                        <div className="wrap-brief">
                        <h3>ERP and Finance</h3>
                        </div>
                        <div className="service-details">
                        <a href>SAP HANA <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>SAP HANA <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>SAP HANA <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-show item" data-aos="fade-down" data-aos-duration={1500}>
                    <div className="col bloc-service">
                        <div className="wrap-brief">
                        <h3>CRM and Customer Experience</h3>
                        </div>
                        <div className="service-details">
                        <a href>Concur Expense <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>Concur Expense <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>Concur Expense <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-show item" data-aos="fade-down" data-aos-duration={1500}>
                    <div className="col bloc-service">
                        <div className="wrap-brief">
                        <h3>Network and Spend Managemen</h3>
                        </div>
                        <div className="service-details">
                        <a href>SAP Ariba Strategic Sourcing Suite <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>SAP Ariba Strategic Sourcing Suite <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>SAP Ariba Strategic Sourcing Suite <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-show item" data-aos="fade-up" data-aos-duration={1500}>
                    <div className="col bloc-service">
                        <div className="wrap-brief">
                        <h3>Supply Chain Management</h3>
                        </div>
                        <div className="service-details">
                        <a href>SAP BusinessObjects Business Intelligence Suite <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>SAP BusinessObjects Business Intelligence Suite <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>SAP BusinessObjects Business Intelligence Suite <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-show item" data-aos="fade-up" data-aos-duration={1500}>
                    <div className="col bloc-service">
                        <div className="wrap-brief">
                        <h3>HR and People Engagement</h3>
                        </div>
                        <div className="service-details">
                        <a href>SAP Commerce Cloud <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>SAP Commerce Cloud <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>SAP Commerce Cloud <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-show item" data-aos="fade-up" data-aos-duration={1500}>
                    <div className="col bloc-service">
                        <div className="wrap-brief">
                        <h3>Business Technology Platform</h3>
                        </div>
                        <div className="service-details">
                        <a href>SAP SuccessFactors Employee Central <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>SAP SuccessFactors Employee Central <i className="fa fa-angle-right" /></a>
                        </div>
                        <div className="service-details">
                        <a href>SAP SuccessFactors Employee Central <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="wrap-see-more-portfolio">
                    <a href>Explore all products from A-Z <i className="fa fa-angle-right" /></a>
                </div>
                </div>
            </div>
        </div>


     );
}
 
export default Portfolio;