import { Container, Row} from "react-bootstrap";
import Productcreationmodal from "../productcreationformmodal/creationformmodal";
import Csvuploadmodal from '../csvuploadmodal/csvuploadmodal'

import React from "react";
import axios from "axios";
import { Redirect, Link} from "react-router-dom";
class Productcreation extends React.Component {
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
      const resp = await axios.get("/api/test/user", {
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
  render() {
    return (
      <div>
        <Container>
        <h1 className="mt-3">Add a new product</h1>
          <Row className="justify-content-center">
            <Productcreationmodal />
            <Csvuploadmodal />
            <Link to="./CSV-TEMPLATE.csv" target="_blank" download className="btn btn-secondary btn-lg m-2">Download the CSV template</Link>
            
          </Row>

        </Container>
        {this.renderRedirect()}
      </div>
    );
  }
}

// function Productcreation() {
//   return (

//   );
// }

export default Productcreation;
