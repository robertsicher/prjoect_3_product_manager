import axios from "axios";
import { Component } from "react";

import TableRow from "../producttable/tablerow";

export default class CatalogueExport extends Component {
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
</>
  );
}
}


