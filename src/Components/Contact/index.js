import React from "react";
import autoBind from "react-autobind";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      email: "",
      name: "",
      message: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const requestBody = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("https://g-eggs-server.tech/email", requestBody)
      .then((response) => {
        if (response) {
          this.setState({
            email: "",
            name: "",
            message: "",
          });
          toast.success("🚀 Email Sent!");
        } else {
          toast.error("Something went wrong!");
        }
      });
  }

  render() {
    return (
      <section className="wedo py-5" id="contact">
        <div className="container py-lg-5">
          <div className="text-center">
            <h3 className="w3_head">CONTACT US</h3>
            <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">
              <i className="fa fa-phone" /> &nbsp; Mobile: 0939-743-3649
            </p>
            <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">
              <i className="fa fa-envelope" /> &nbsp;Email:
              gretchensabalvaro@yahoo.com
            </p>
          </div>
          <div className="contact_grid_right mt-5 mx-auto text-center">
            <form action="#" method="post" onSubmit={this.handleSubmit}>
              <div className="row contact_top">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required=""
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    placeholder="Your Email"
                    onChange={this.handleChange}
                    required=""
                  />
                </div>
              </div>
              <textarea
                name="message"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'Message...';}"
                required=""
                value={this.state.message}
                onChange={this.handleChange}
              >
                Message...
              </textarea>
              <input type="submit" value="Send Message" /> &nbsp;
              <input type="reset" value="Clear Form" />
              <div className="clearfix"> </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </section>
    );
  }
}

export default Contact;
