import React from "react";

class News extends React.Component {
  render() {
    return (
      <section className="diam  py-5" id="news">
        <div className="container py-lg-5">
          <img src="images/1.jpg" alt="news image" className="img-fluid" />
          <div className="row about-info-diam mt-5">
            <div className="col-md-4 about-diam about-diam1">
              <h4>Integer porttitor mollisar lorem</h4>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.Nulla pellentesque mi non
                laoreet eleifend. Integer porttitor mollisar lorem, at molestie
                arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum{" "}
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.Nulla pellentesque mi non
                laoreet eleifend. Integer porttitor mollisar lorem, at molestie
                arcu pulvinar ut. Proin ac fermentum est.{" "}
              </p>
            </div>
            <div className="col-md-4 about-diam about-diam2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.Nulla pellentesque mi non
                laoreet eleifend. Integer porttitor mollisar lorem, at molestie
                arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum,
                consectetur ac ipsum Proin ac fermentum est.{" "}
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.Nulla pellentesque mi non
                laoreet eleifend. Integer porttitor mollisar lorem, at molestie
                arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum,
                consectetur ac ipsum Proin ac fermentum est.{" "}
              </p>
            </div>
            <div className="col-md-4 about-diam about-diam3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.Nulla pellentesque mi non
                laoreet eleifend. Integer porttitor mollisar lorem, at molestie
                arcu pulvinar ut. Proin ac fermentum est.{" "}
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.Nulla pellentesque mi non
                laoreet eleifend. Integer porttitor mollisar lorem, at molestie
                arcu pulvinar ut. Proin ac fermentum est.{" "}
              </p>
              <a
                href="#contact"
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

export default News;
