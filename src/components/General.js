import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super()

    this.state = {
      fname: '',
      lname: '',
      email: '',
      activeForm: true
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  editFormFields = (e) => {
    console.log('edit');
    this.setState({
      activeForm: true
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      activeForm: false
    });
  }

  render(){
    const active = this.state.activeForm;

    return(
      <div>
        <h1>General Information</h1>

        {active ? (
          <form onSubmit={this.onSubmit}>
            <label for="fname">First Name:</label><br />
            <input type="text" id="fname" name="fname" value={this.state.fname} onChange={this.handleChange} /><br />
            <label for="lname">Last Name:</label><br />
            <input type="text" id="lname" name="lname" value={this.state.lname} onChange={this.handleChange} /><br />
            <label for="fname">Email:</label><br />
            <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} /><br />
            <input type="submit" value="Submit" />
          </form>
        ) : (
          <div>
            <p>First Name: {this.state.fname}</p>
            <p>Last Name: {this.state.lname}</p>
            <p>Email: {this.state.email}</p>
            <button type="button" onClick={this.editFormFields}>Edit</button>
          </div>
        )}
      </div>


    )
  }
}

export default General;