import React, { Component } from "react";
import General from './General';
import Education from './Education';

class Resume extends Component {
  render() {
    return(
      <main>
        <General /> <br />
        <Education />
      </main>
    )
  }
}

export default Resume;