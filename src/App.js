import React, { Component } from "react";
import Resume from './components/Resume';

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      personal: {
        fname: '',
        lname: '',
        email: '',
      }
    }
  }

  render() {
    return(
      <div>
        <Resume />
      </div>
    )
  }
}

export default App;