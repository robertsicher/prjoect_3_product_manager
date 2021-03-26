import axios from "axios";
import { Component } from "react";
import { Table, } from "react-bootstrap";
import TableRow from "./tablerow";
import { CSVLink } from "react-csv";
import './producttable.css'

export default class ProductTable extends Component {

    constructor(props){
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this)

        this.state = {products: [], filteredProducts: [] };
    }

//   constructor(props) {
//     super(props);
//     this.state = { products: [], filteredProducts: [] };
//   }
    getProducts() {
      axios
      .get("http://localhost:8080/product/")
      .then((response) => {
        this.setState({ products: response.data, filteredProducts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    }

  componentDidMount() {
    this.getProducts();
  }

    deleteProduct(id) {
        axios.delete('http://localhost:8080/product/'+id)
        .then(res => this.getProducts());
        this.setState({
        products: this.state.products.filter(el => el._id !== id)

        })
    }

    // productList(){ 
    //     return this.state.products.map( currentproduct =>{
    //         return <TableRow product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id} />;
    //     })
    // }


  productList() {
    return this.state.filteredProducts.map(currentproduct => {
      return <TableRow product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id} />;
    });
  }
  handleSort(e) {
    const filter = e.target.value;
    const filteredEmployeesList = this.state.products.filter((employee) => {
      let employeeValues = Object.values(employee).join("").toLowerCase();
      return employeeValues.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredProducts: filteredEmployeesList });
    console.log(this.filteredProducts);
  }
  render() {

    return (
      <div className="">
   <CSVLink className='d-inline nounderline btn btn-secondary mr-2' data={this.state.products}>Download the Catalogue </CSVLink>
        
        <input
          className=" d-inline form-control px-3 "
          type="text"
          placeholder="Search Products"
          style={{
            margin: "auto",
            textAlign: "center",
            marginBottom: 20,
            marginTop: 20,
            width: "70%",
          }}
          onChange={(e) => {
            this.handleSort(e);
          }}
        ></input>
        <Table striped bordered hover variant="dark">

            <thead>
                <tr>
                <th style={{width: "3%"}}>Product #</th>
                <th style={{width: "5%"}}>Thumbnail</th>
                <th style={{width: "5%"}}>Product Title</th>
                <th style={{width: "15%"}}>Colour</th>
                <th style={{width: "15%"}}>No of products</th>

                </tr>
            </thead>
            <tbody>
                {this.productList()}
            </tbody>

        </Table>
      </div>
    );
  }
}
