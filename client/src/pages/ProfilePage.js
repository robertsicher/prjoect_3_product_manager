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


  render() {
    return (
      <div className="text-center ">
        <h1>Welcome to Jwt ProfilePage</h1>
        <h4> Email: {this.state.email}</h4>
        <h4>Username: {this.state.username}</h4>
        <button
          type="submit"
          onClick={this.handleSubmit}
          className="btn btn-outline-primary btn-block mt-3"
        >
          Logout
        </button>
        {/* </Link> */}
        {this.renderRedirect()}
      </div>
    );
  }
}

export default withRouter(ProfilePage);
