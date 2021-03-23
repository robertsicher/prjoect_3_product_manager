import axios from "axios";
import { Component } from "react";
import { Table } from "react-bootstrap";
import TableRow from "./tablerow";
import {CSVLink} from 'react-csv';

export default class ProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {products: []};
    }

    componentDidMount(){
        axios.get('http://localhost:8080/product/')
        .then(response => {
            this.setState({ products: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    productList(){ 
        return this.state.products.map( currentproduct =>{
            return <TableRow product={currentproduct} key={currentproduct._id} />;
        })
    }

  render(){
    return (
        <> 
        <CSVLink data={this.state.products}>
            Download me
        </CSVLink>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th style={{width: "3%"}}>Product #</th>
                <th style={{width: "5%"}}>Thumbnail</th>
                <th style={{width: "5%"}}>Product Title</th>
                <th style={{width: "15%"}}>Product Description</th>
                <th style={{width: "15%"}}>Dimensions</th>
                </tr>
            </thead>
            <tbody>
                {this.productList()}
            </tbody>
        </Table>
        </>
  );
}
}


