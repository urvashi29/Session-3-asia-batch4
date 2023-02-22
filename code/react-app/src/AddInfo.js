import React, { Component } from "react";
import "./AddInfo.css";

class AddInfo extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    contact: "",
    error: {
      nameError: "",
      contactError: "",
      ageError: "",
      emailError: "",
    },
    formValid: false,
  };

  handleChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.id);

    // this is referring to AddInfo
    if (e.target.id == "name") {
      this.validateName(e.target.value);
    }
    if (e.target.id == "age") {
      this.validateAge(e.target.value);
    }
    if (e.target.id == "email") {
      this.validateEmail(e.target.value);
    }
    if (e.target.id == "contact") {
      this.validateContact(e.target.value);
    }

    // this.setState({
    //   [e.target.id]: e.target.value,
    // });
  };

  validateName = (name) => {
    let formValid = this.state.formValid;
    let nameError = this.state.error.nameError;

    if (name.trim() === "") {
      formValid = false;
      nameError = "This is required";
    } else if (name.trim().length < 3) {
      formValid = false;
      nameError = "Minimum of 3 characters";
    } else {
      formValid = true;
      nameError = "";
    }

    this.setState({
      name,
      formValid,
      error: { ...this.state.error, nameError },
    });

    return formValid;
  };

  validateAge = (age) => {
    let formValid = this.state.formValid;
    let ageError = this.state.ageError;

    if (age.trim() === "") {
      ageError = "This is required*";
      formValid = false;
    } else if (age.trim().length > 3) {
      ageError = "Please enter valid age";
      formValid = false;
    } else {
      ageError = "";
      formValid = true;
    }

    this.setState({
      age,
      formValid,
      error: { ...this.state.error, ageError },
    });
    return formValid;
  };

  validateEmail = (email) => {
    let formValid = this.state.formValid;
    let emailError = this.state.error.emailError;

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(email)) {
      emailError = "This is invalid*";
      formValid = false;
    } else {
      emailError = "";
      formValid = true;
    }

    this.setState({
      email,
      formValid,
      error: { ...this.state.error, emailError },
    });
    return formValid;
  };

  validateContact = (contact) => {
    let formValid = this.state.formValid;
    let contactError = this.state.error.contactError;

    if (contact.trim() == "") {
      contactError = "This is required";
      formValid = false;
    } else if (contact.trim().length != 10) {
      contactError = "Please enter valid contact";
      formValid = false;
    } else {
      contactError = "";
      formValid = true;
    }

    this.setState({
      contact,
      formValid,
      error: { ...this.state.error, contactError },
    });
    return formValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.validateName(this.state.name) &&
      this.validateAge(this.state.age) &&
      this.validateEmail(this.state.email) &&
      this.validateContact(this.state.contact)
    ) {
      alert("Form is submitted");
      this.props.addData(this.state);

      this.setState({
        name: "",
        age: "",
        email: "",
        contact: "",
        formValid: false,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Please enter name"
          onChange={this.handleChange}
          id="name"
          value={this.state.name}
        />
        <p style={{ color: "red", fontSize: "20px" }}>
          {this.state.error.nameError}
        </p>

        <label>Age</label>
        <input
          type="text"
          placeholder="Please enter age"
          onChange={this.handleChange}
          id="age"
          value={this.state.age}
        />
        <p className="error-message">{this.state.error.ageError}</p>

        <label>Email</label>
        <input
          type="text"
          placeholder="Please enter email"
          onChange={this.handleChange}
          id="email"
          value={this.state.email}
        />
        <p>{this.state.error.emailError}</p>

        <label>Contact</label>
        <input
          type="text"
          placeholder="Please enter contact"
          onChange={this.handleChange}
          id="contact"
          value={this.state.contact}
        />
        <p id="message">{this.state.error.contactError}</p>

        <button>Submit</button>
      </form>
    );
  }
}

export default AddInfo;

// in html
// <p style="color: red; font-size: 20px" class="nav-item"></p>
