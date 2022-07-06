import React, { Component } from "react";
import EduItem from "./EduItem";

// Need to create unique id for each EduItem child component
class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
      eduValues: {
        sname: "",
        major: "",
      },
      activeForm: false,
      items: []
    };
  }

  handleChange = (e) => {
    this.setState({
      eduValues: { ...this.state.eduValues, [e.target.name]: e.target.value }
    })
  }

  addFormFields () {
    this.setState({
      activeForm: true
    })
  }

  removeFormFields(i) {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.eduValues],
      activeForm: false
    })
  }


  // Need to make it so that remove button appears with each existing form field and so that no forms are present until user adds
  // a education form (optional for now)
  render() {
    const active = this.state.activeForm;

    return (
      <div>
        <h1>Education</h1>

        {
          this.state.items.map((item) => {
            return <EduItem data={item} />
          })
        }

        {active ? (
          <form onSubmit={this.handleSubmit}>
            <label for="sname">School Name:</label><br />
            <input type="text" id="sname" name="sname" value={this.state.eduValues.sname} onChange={this.handleChange} /><br />
            <label for="major">Major:</label><br />
            <input type="text" id="major" name="major" value={this.state.eduValues.major} onChange={this.handleChange} /><br />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <button type="button" onClick={() => this.addFormFields()}>Add</button>
          </div>
        )}
      </div>
    )
  }
}

export default Education