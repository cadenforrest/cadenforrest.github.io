import React, { Component } from "react";
import {Fade} from "react-awesome-reveal"; 

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: [
        "HTML",
        "CSS",
        "JS",
        "SQL",
        "React JS",
        "Python for Data Science",
      ],
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <Fade>
          <h1 className="subtopic">My Skills</h1>
          <ul>
            {this.state.myskills.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
        </Fade>
      </div>
    );
  }
}

export default Skills;
