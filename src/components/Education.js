import React, { Component, useState } from "react";

class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
      eduValues: [{
        name: "",
        major: "",
      }]
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (i, e) => {
    let eduValues = [...this.state.eduValues];
    eduValues[i][e.target.name] = e.target.value;
    this.setState({ eduValues });
  }

  addFormFields = () => {
    this.setState(({
      eduValues: [...this.state.eduValues, {
        name: "", 
        major: "",
      }]
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state.eduValues));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.eduValues.map((element, index) => (
          <div key={index}>
            <label for="name">School Name:</label><br />
            <input type="text" id="name" value={element.name || ""} onChange={e => this.handleChange(index, e)} /><br />
            <label for="major">Major:</label><br />
            <input type="text" id="major" value={element.major || ""} onChange={e => this.handleChange(index, e)} /><br />
          </div>
        ))}
        <div>
          <button type="button" onClick={() => this.addFormFields()}>Add</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default Education