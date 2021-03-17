import {Form, Row, Col, Container, Button} from 'react-bootstrap'
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



  render(){
    return (
      <Container className="mt-2">
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2"> 
                username
              </Form.Label>
              <Col sm="10">
                <Form.Control defaultValue="username" />
              </Col>
            </Form.Group>
  
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Button variant="secondary" size="lg">
              Log in
            </Button>
          </Form>
      </Container>
    );
  }

}

export default withRouter(Login);


