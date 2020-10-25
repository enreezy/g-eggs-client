import React from "react";

class Contact extends React.Component {
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
            <form action="#" method="post">
              <div className="row contact_top">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required=""
                  />
                </div>
              </div>
              <textarea
                name="Message"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'Message...';}"
                required=""
              >
                Message...
              </textarea>
              <input type="submit" value="Send Message" /> &nbsp;
              <input type="reset" value="Clear Form" />
              <div className="clearfix"> </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
