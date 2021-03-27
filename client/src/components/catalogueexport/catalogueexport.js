import axios from "axios";
import { Component } from "react";

import TableRow from "../producttable/tablerow";
import { Redirect, } from "react-router-dom";
export default class CatalogueExport extends Component {
    constructor(props){
        super(props);
        this.state = {products: [],
            username: "",
            password: "",
            email: "",
            isLoggedIn: true,
            accessToken: "",
            retriveData: false,};
    }

    async componentDidMount(){
        axios.get('/product/')
        .then(response => {
            this.setState({ products: response.data})
        })
        .catch((error) => {
            console.log(error);
        })

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
    productList(){
        return this.state.products.map( currentproduct =>{
            return <TableRow product={currentproduct} key={currentproduct._id} />;
        })
    }

  render(){
    return (
<div>
{this.renderRedirect()}
</div>
  );
}
}
