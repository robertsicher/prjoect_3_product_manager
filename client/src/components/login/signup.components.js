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
    try {
      const resp = await axios.post(
        "http://localhost:8080/api/auth/signup",
        creadentials
      );
      if (resp.data.status) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("@token", resp.data.accessToken);
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ show_alert: true, alert_message: resp.data.message });
      }
    } catch (err) {
      // Handle Error Here
      console.error(err.massage);
    }
  };
  renderRedirect = () => {
    if (this.state.isLoggedIn) {
      return <Redirect to="/profile" />;
    }
  }; 

}





export default withRouter(Signup);