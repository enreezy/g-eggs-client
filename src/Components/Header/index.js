import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="main-top py-1">
        <header>
          <div className="container-fluid px-lg-4">
            <nav className="py-4">
              <div className="logo" id="logo">
                <a href="index.html">
                  <img src="images/icon.png" />
                </a>
              </div>
              <label for="drop" className="toggle">
                Menu
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu mt-md-3">
                <li className="mr-lg-2 active">
                  <a href="index.html">Home</a>
                </li>
                <li className="mr-lg-2">
                  <a href="#about" className="scroll">
                    About
                  </a>
                </li>
                <li className="mr-lg-2">
                  <a href="#services" className="scroll">
                    Services
                  </a>
                </li>
                <li className="mr-lg-2">
                  <a href="#gallery" className="scroll">
                    Gallery
                  </a>
                </li>
                <li className="mr-lg-2">
                  <a href="#news" className="scroll">
                    News
                  </a>
                </li>
                <li>
                  <a href="#contact" className="scroll">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="main-w3pvt">
          <div className="container-fluid">
            <div className="row">
              <div className="style-banner">
                <h1 className="text-white">Welcome to G-Eggs Poultry Farm</h1>
                <p className="mt-5 text-white">
                  Supply best and quality fresh eggs
                </p>
                <a
                  href="#about"
                  className="btn button-style mt-sm-5 mt-4 scroll"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
