import React from "react";
import ProductTable from "../producttable/producttable";
import axios from "axios";
import { Redirect,  } from "react-router-dom";
class Catalogue extends React.Component{
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

  renderRedirect = () => {
    console.log(this.state);
    if (!this.state.isLoggedIn) {
      console.log("logged in false");
      return <Redirect to="/sign-in" />;
    }
  };
  render(){
    return ( 
    <div className="mt-3">
      <h1>Catalogue</h1>
      {this.renderRedirect()}
      <ProductTable />
  </div>)
  }
}


export default Catalogue;