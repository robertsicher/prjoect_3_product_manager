import axios from "axios";
import { Component } from "react";
import { Table } from "react-bootstrap";
import TableRow from "./tablerow";
import {CSVLink} from 'react-csv';

export default class ProductTable extends Component {
    constructor(props){
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this)

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

    deleteProduct(id) {
        axios.delete('http://localhost:8080/product/'+id)
        .then(res => console.log(res.data));
        this.setState({
        products: this.state.products.filter(el => el._id !== id)
        })
    }

    productList(){ 
        return this.state.products.map( currentproduct =>{
            return <TableRow product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id} />;
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
                <th style={{width: "15%"}}>Colour</th>
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


