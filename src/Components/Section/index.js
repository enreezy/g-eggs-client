import React from "react";

class Section extends React.Component {
  render() {
    return (
      <div>
        <section className="wedo py-5">
          <div className="container py-lg-5">
            <div className="text-center">
              <h3 className="w3_head">Always Available</h3>
              <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">
                Our Farm Eggs is Available everyday! What are you waiting for?
                Grab yours purchase now.
              </p>
            </div>
          </div>
        </section>
        <section className="augue py-5" id="gallery">
          <div className="container py-lg-5">
            <div className="row about-info-augue">
              <div className="col-md-4 about-aug about-aug1">
                <h4>Farm Eggs</h4>
                <p>
                  FARM EGGS (GRADED MACHINE SORTED) We can deliver as best we
                  can. Can also pick up
                </p>
                <p className="mt-4">
                  NW or No Weight PW or Peewee PL or Pullet Small Medium Large
                  XL Jumbo
                </p>
                <a
                  href="#news"
                  className="btn button-style mt-sm-5 mt-4 scroll"
                >
                  Learn More
                </a>
              </div>
              <div className="col-md-4 about-aug about-aug2">
                <div className="augue_im1">
                  <img
                    src="images/image1.jpg"
                    alt="news image"
                    className="img-fluid"
                  />
                </div>
                <div className="augue_im2 mt-4 mb-4">
                  <img
                    src="images/image2.jpg"
                    alt="news image"
                    className="img-fluid"
                  />
                </div>
                <div class="augue_im3">
                  <img
                    src="images/eggbg.jpg"
                    alt="news image"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-4 about-aug about-aug3">
                <div className="augue_im4">
                  <img
                    src="images/image4.jpg"
                    alt="news image"
                    className="img-fluid"
                  />
                </div>
                <div className="augue_im5 mt-4 mb-4">
                  <img
                    src="images/image3.jpg"
                    alt="news image"
                    className="img-fluid"
                  />
                </div>
                <div class="augue_im6">
                  <img
                    src="images/egg_size_card.jpg"
                    alt="news image"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wedo py-5">
          <div className="container py-lg-5">
            <div className="text-center">
              <h3 className="w3_head">
                Integer porttitor mollisar lorem, at molestie arcu{" "}
              </h3>
              <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">
                Nulla pellentesque mi non laoreet eleifend. Integer porttitor
                mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum
                est. Cras mi ipsum, consectetur ac ipsum Proin ac fermentum est.
                Cras mi ipsum,{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Section;
