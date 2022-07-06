import React, { Component } from "react";

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

  handleChange(i, e) {
    let eduValues = this.state.eduValues;
    eduValues[i][e.target.name] = e.target.value;
    this.setState({ eduValues });
  }

  addFormFields () {
    this.setState(({
      eduValues: [...this.state.eduValues, {
        name: "", 
        major: "",
      }]
    }))
  }

  removeFormFields(i) {
    let eduValues = this.state.eduValues;
    eduValues.splice(i, 1);
    this.setState({ eduValues });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state.eduValues));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.eduValues.map((element, index) => (
          <div key={index}>
            <label for="name">School Name:</label><br />
            <input type="text" id="name" defaultValue={element.name || ""} onChange={e => this.handleChange(index, e)} /><br />
            <label for="major">Major:</label><br />
            <input type="text" id="major" defaultValue={element.major || ""} onChange={e => this.handleChange(index, e)} /><br />
            {
              index ?
                <button type="button" onClick={() => this.removeFormFields(index)}>Remove</button> : null
            }
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