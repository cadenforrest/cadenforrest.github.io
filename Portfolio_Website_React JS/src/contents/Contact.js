import React, { Component } from "react";
import Social from "../components/Social";
import { Fade } from "react-awesome-reveal";
class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <Fade>
          <h1 className="subtopic">Contact Me</h1>
          <p>Texas State Email : c_w424@tx.state.edu</p>
          <p>Personal email : cadenforrest@gmail.com</p>
        </Fade>
        <Social />
      </div>
    );
  }
}

export default Contact;
