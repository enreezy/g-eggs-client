import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="cpy-right text-center py-5">
        <ul className="social_section_1info pt-lg-4 mb-lg-4">
          <li>
            <a href="https://www.facebook.com/g-eggspoultryfarm">
              <span className="fa fa-facebook"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-twitter"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-google-plus"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-linkedin"></span>
            </a>
          </li>
        </ul>
        <p>
          © 2020 G-Eggs. All rights reserved | Design by{" "}
          <a href="http://w3layouts.com"> W3layouts.</a> |{" "}
          <a href="https://www.logodesign.net/image/hatched-egg-with-circle-around-it-5481ld">
            Logo source Logodesign.net
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
