import React, { Component } from "react";
import Widecard from "../components/Widecard";
import { Fade } from "react-awesome-reveal";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Fade>
          <Widecard
            title="B.S. Computer Science"
            where="Texas State University"
            from="August 2020"
            to="Present"
            relevantCourseWork="Relevant Coursework: Introduction to Artificial Intelligence, 
            Intro to Machine Learning, Data Structures and Algorithms, 
            Intro to Object Oriented Programming, Advanced Vector Calculus 
            with Applications, Differential Equations, and more!"
          />

          <Widecard
            title="B.S. Computer Science"
            where="Austin Community College"
            from="January 2020"
            to="August 2020"
          />

          <Widecard
            title="B.S. Aerospace Engineering"
            where="University of Texas at Austin"
            from="August 2016"
            to="December 2019"
          />

          <Widecard
            title="H.S. Diploma"
            where="Whitehouse High School"
            from="August 2014"
            to="August 2016"
          />
        </Fade>
      </div>
    );
  }
}

export default Education;
