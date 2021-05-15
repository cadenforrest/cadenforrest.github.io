import React, { Component } from "react";
import {Fade} from "react-awesome-reveal";

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <Fade>
          <h1>My name is Caden Westmoreland</h1>
          <br></br>
          <p>
            I grew up in Tyler, TX and graduated from Whitehouse High School in
            2016 in the top 7% of my class. I then began a bachelor's degree in
            Aerospace Engineering at The University of Texas at Austin. During
            that time, I completed two internships in which I found myself
            primarily developing software for my employers. In my first
            internship, I was tasked with developing a software and hardware
            solution for remote-controlling tiny little mirrors inside of a
            petawatt laser (with micrometer accuracy!) The next summer, I was
            tasked with building a database for an enginneering company to keep
            track of various tasks the other engineers and technicians would be
            working on.
          </p>

          <p>
            By the end of both internships, I had completed both projects and
            decided that I really enjoyed developing software. In December 2019,
            I made a career switch to Computer Science and began my transfer
            process to Texas State University. I expect to graduate in Fall
            2016.
          </p>
        </Fade>
      </div>
    );
  }
}

export default About;
