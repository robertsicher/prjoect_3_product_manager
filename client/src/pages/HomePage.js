import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="text-center ">
        <h1>Welcome to Jwt authentication</h1>
        <Link className="mt-4 d-block" to={"/sign-in"}>
          <button type="submit" className="btn btn-outline-primary btn-block">
            Login
          </button>
        </Link>
        <Link className="mt-2 d-block" to={"/sign-up"}>
          <button type="submit" className="btn btn-outline-primary btn-block">
            Signup
          </button>
        </Link>
      </div>
    );
  }
}
