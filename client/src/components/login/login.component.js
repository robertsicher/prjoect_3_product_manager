//import {Form, Row, Col, Container, Button} from 'react-bootstrap'
import { Redirect, withRouter } from "react-router-dom";
import React, { Component } from "react";
import axios from 'axios';

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
  
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("isLoggedIn"))) {
      this.setState({ isLoggedIn: true });
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const creadentials = {
      username: this.state.username,
      password: this.state.password,
    };
    try {
      const resp = await axios.post(
        "http://localhost:8080/api/auth/signin",
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
      console.log("user is logged in");
      return <Redirect to="/profile" />;
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        {this.state.show_alert ? (
          <div className="alert alert-danger" role="alert">
            {this.state.alert_message}
          </div>
        ) : null}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={this.state.username}
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        {this.renderRedirect()}
      </form>
    );
  }
}


export default withRouter(Login);


