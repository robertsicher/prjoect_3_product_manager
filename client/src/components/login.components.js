import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      show_alert: false,
      alert_message: "",
    };
  }
}

export default withRouter(Login);