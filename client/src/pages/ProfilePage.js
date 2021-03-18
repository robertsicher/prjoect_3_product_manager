import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      isLoggedIn: true,
      accessToken: "",
      retriveData: false,
    };
  }
  async componentDidMount() {
    console.log(JSON.parse(localStorage.getItem("isLoggedIn")));
    if (JSON.parse(localStorage.getItem("isLoggedIn"))) {
      this.setState({
        isLoggedIn: true,
        accessToken: localStorage.getItem("@token"),
      });
    } else {
      this.setState({
        isLoggedIn: false,
        accessToken: localStorage.getItem("@token"),
      });
    }
    if (!this.state.retriveData) {
      this.retriveData();
      this.setState({ retriveData: true });
    }
  }
  retriveData = async () => {
    const creadentials = {
      accessToken: this.state.accessToken,
    };

    // console.log(this.retriveData());
    try {
      const resp = await axios.get("http://localhost:8080/api/test/user", {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("@token"),
        },
        creadentials,
      });
      console.log(resp.data);
      this.setState(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err.massage);
    }
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const creadentials = {
      accessToken: this.state.accessToken,
    };
    try {
      const resp = await axios.post("http://localhost:8080/api/auth/logout", creadentials);
      console.log(resp.data);
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("@token", resp.data.accessToken);
      this.setState({ isLoggedIn: false });
      console.log(localStorage);
    } catch (err) {
      // Handle Error Here
      console.error(err.massage);
    }
  };
  renderRedirect = () => {
    console.log(this.state);
    if (!this.state.isLoggedIn) {
      console.log("logged in false");
      return <Redirect to="/sign-in" />;
    }
  };

  render() {
    return (
      <div className="text-center ">
        <h1>Welcome to Jwt ProfilePage</h1>
        <h4> Email: {this.state.email}</h4>
        <h4>Username: {this.state.username}</h4>
        <button type="submit" onClick={this.handleSubmit} className="btn btn-outline-primary btn-block mt-3">
          Logout
        </button>
        {/* </Link> */}
        {this.renderRedirect()}
      </div>
    );
  }
}

export default withRouter(ProfilePage);
