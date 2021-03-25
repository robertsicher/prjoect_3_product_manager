import {Button, Form, Container} from 'react-bootstrap';
import React, { Component } from "react";
import axios from "axios";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeProductname = this.onChangeProductname.bind(this); 
    this.onChangeManufacturer = this.onChangeManufacturer.bind(this); 
    this.onChangePartNumber = this.onChangePartNumber.bind(this);
    this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
    this.onChangeDimensions = this.onChangeDimensions.bind(this);
    this.onChangeProductColours = this.onChangeProductColours.bind(this);
    this.onChangeMarketingInfo = this.onChangeMarketingInfo.bind(this);
    this.onSubmit = this.onSubmit.bind(this); 

    this.state = {
      productname:'',
      manufacturer:'',
      partnumber:'',
      productcategory:'',
      dimensions:'',
      productcolours:'',
      marketinginfo:'',
      showHide : false,
    }
  };

  componentDidMount() {
      axios.get('http://localhost:8080/product/'+this.props.match.params.id)
      .then(response => {
        console.log(response)
          this.setState({
            productname: response.data.productname,
            manufacturer: response.data.manufacturer,
            partnumber: response.data.partnumber,
            productcategory: response.data.productcategory,
            dimensions: response.data.dimensions,
            productcolours: response.data.productcolours,
            marketinginfo: response.data.marketinginfo,
          })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleModalShowHide(){
    this.setState({showHide: !this.state.showHide})
  }
  

  onChangeProductname(e){
    this.setState({
      productname: e.target.value
    });
  }

  onChangeManufacturer(e){
    this.setState({
      manufacturer: e.target.value
    });
  }

  onChangePartNumber(e){
    this.setState({
      partnumber: e.target.value
    });
  }

  onChangeProductCategory(e){
    this.setState({
      productcategory: e.target.value
    });
  }
  
  onChangeDimensions(e){
    this.setState({
      dimensions: e.target.value
    });
  }

  onChangeProductColours(e){
    this.setState({
      productcolours: e.target.value
    });
  }

  onChangeMarketingInfo(e){
    this.setState({
      marketinginfo: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    const product = {
      productname: this.state.productname,
      manufacturer: this.state.manufacturer,
      partnumber: this.state.partnumber,
      productcategory: this.state.productcategory,
      dimensions: this.state.dimensions,
      productcolours: this.state.productcolours,
      marketinginfo: this.state.marketinginfo,
    }

    console.log(product);

    axios.post('http://localhost:8080/product/update/'+this.props.match.params.id, product)
    .then(res => console.log(res.data));

    window.location="/catalogue"
  }

    // const [show, setShow] = useState(false);
  
    // handleClose = () => setShow(false);
    // handleShow = () => setShow(true);
  
    render (){
      return(
      <Container>
          <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="textarea" required defaultValue={this.state.productname} onChange={this.onChangeProductname}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Part Number</Form.Label>
                <Form.Control type="textarea" required value={this.state.partnumber} onChange={this.onChangePartNumber}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control type="textarea" required value={this.state.manufacturer} onChange={this.onChangeManufacturer}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product Category</Form.Label>
                <Form.Control type="textarea" required value={this.state.productcategory} onChange={this.onChangeProductCategory}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Dimensions</Form.Label>
                <Form.Control type="textarea" required value={this.state.dimensions} onChange={this.onChangeDimensions}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Colours</Form.Label>
                <Form.Control type="textarea" required value={this.state.productcolours} onChange={this.onChangeProductColours}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Marketing Text</Form.Label>
                <Form.Control as="textarea" rows={5} required value={this.state.marketinginfo} onChange={this.onChangeMarketingInfo}/>
              </Form.Group>
              <Button variant="primary" type="submit" value="Edit Product">
              Add Product
            </Button>
            </Form>
        </Container>
      );
    }
  }
  