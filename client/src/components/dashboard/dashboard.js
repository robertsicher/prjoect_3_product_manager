import React from "react";
import { Container } from "react-bootstrap";
// import { Chart } from 'react-charts'
import axios from "axios";
import { Redirect, Link ,withRouter} from "react-router-dom";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { Bar, Line } from "react-chartjs-2";
 class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      isLoggedIn: true,
      accessToken: "",
      retriveData: false,
      products: [],
      products_length: null,
      show_login_alert: false,
      chart_products: [],
      product_title: [],
    };
  }
  async componentDidMount() {
    this.setState({
      show_login_alert: true,
    });

    this.getProducts();

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

  getProducts() {
    axios
      .get("/product/")
      .then((response) => {
        this.setState({ products: response.data, products_length: response.data.length });

        let products = response.data;
        let product_countArr = [];
        let product_title = [];
        for (var i = 0; i < products.length; i++) {
          product_countArr.push(products[i].no_of_products);
          product_title.push(products[i].productname);
        }
        this.setState({
          chart_products: product_countArr,
          product_title: product_title,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
        <Container className="mt-2 w-70">
          {this.state.show_login_alert ? (
            <div class="alert alert-dark" role="alert">
              You Are Logged in
            </div>
          ) : null}

          <h1 style={{ color: "orange", fontWeight: "900" }}>Dashboard</h1>
          {/* <h2>Total Number of Products {this.state.products_length} </h2> */}

          <div className="card text-center">
            <div className="card-header">Products</div>
            <div className="card-body">
              <h5 classNames="card-title">Total Number of Products</h5>
              <h1 style={{ fontSize: 60, color: "orange", fontWeight: "900" }} className="card-text my-4">
                {this.state.products_length}
              </h1>
              <Link to={"/catalogue"}>
                {" "}
                <a href="#" className="mx-1 btn btn-outline-secondary">
                  Show products
                </a>
              </Link>
            </div>
            {/* <div class="card-footer text-muted">
    2 days ago
  </div> */}
          </div>
          <div className="container">
            <Line
              type="line"
              data={{
                labels: this.state.product_title,
                datasets: [
                  {
                    label: "Products",
                    data: this.state.chart_products,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              width={100}
              height={30}
              options={{ maintainAspectRatio: true }}
            />
          </div>
          {this.renderRedirect()}
        </Container>
      </div>
    );
  }
}
export default withRouter(Dashboard)