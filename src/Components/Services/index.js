import React from "react";

class Service extends React.Component {
  render() {
    return (
      <section className="what_you py-5" id="services">
        <div className="container py-lg-5">
          <div className="row about-info-grids text-center">
            <div className="col-md-4 about-info about-info1">
              <span className="fa fa-truck"></span>
              <h4>Supply</h4>
              <div className="h4-underline"></div>
              <p>
                You will be given the eggs sizes you need. Fresh Eggs Direct at
                the Farm!
              </p>
            </div>
            <div className="col-md-4 about-info about-info2">
              <span className="fa fa-balance-scale"></span>
              <h4>Sell</h4>
              <div className="h4-underline"></div>
              <p>
                The weight is right Always new and fresh DTI standard Size Our
                chickens work hard to lay eggs so we have a lot of egg
                production everyday! So what are you waiting for purchase now!
                Don't be shy to ask!
              </p>
            </div>
            <div className="col-md-4 about-info about-info3">
              <span className="fa fa-cart-plus"></span>
              <h4>Wholesale</h4>
              <div className="h4-underline"></div>
              <p>You can still do business! We offer, Pocket price!</p>
            </div>
            <div className="whsat_bt text-center mx-auto">
              <a
                href="#gallery"
                className="btn button-style mt-sm-5 mt-4 scroll"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
