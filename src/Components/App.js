import React from "react";
import Header from "./Header/";
import About from "./About/";
import Service from "./Services/";
import Section from "./Section/";
import News from "./News/";
import Contact from "./Contact/";
import Footer from "./Footer/";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Service />
        <Section />
        <News />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
