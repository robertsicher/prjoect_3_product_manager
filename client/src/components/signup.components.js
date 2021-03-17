import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      isLoggedIn: false,
      alert_message: "",
    };
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("isLoggedIn"))) {
      this.setState({ isLoggedIn: true });
    }
    // this.renderRedirect();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const creadentials = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };
}
}

export default withRouter(Signup);