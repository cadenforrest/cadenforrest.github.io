import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import { Fade } from "react-awesome-reveal";
import profilepic from "../img/profilepic.jpeg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <Fade>
          <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
          <ReactTypingEffect
          className="typingeffect"
          text={[
            "Hi! My name is Caden Westmoreland.",
            "I'm a senior CS student at Texas State University.",
          ]}
          speed={75}
          eraseDelay={2000}
        />
        </Fade>
        
        <Social />
      </div>
    );
  }
}

export default Home;
