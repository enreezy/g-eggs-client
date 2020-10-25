import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="wedo py-5" id="about">
        <div className="container py-lg-5">
          <div className="text-center">
            <h2 className="w3_head">About G-Eggs</h2>
            <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">
              Established in 2020, G-Eggs is a family-owned business currently
              located at Batangas City.
            </p>

            <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">
              Started as a simple egg supplier.
            </p>

            <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">
              The G-eggs poultry farm selected the fresh eggs to give our
              clients a highly quality and best eggs. Our egg can be bought by
              anyone whether poor or rich. In addition g-eggs are nutritious for
              our body and you will be satisfied.
            </p>

            <h2 className="w3_head">Mission</h2>
            <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">
              To be a part of people's lives by offering fresh eggs, delivering
              the best quality, mission to focus on meeting the needs of the
              customer, on continuous growth and permanent orientation and
              innovation.
            </p>

            <h2 className="w3_head">Vision</h2>
            <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">
              To value the egg producer's contributions to the economy,
              environment, community, and to consumer health and well-being.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
