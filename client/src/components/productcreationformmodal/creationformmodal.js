import {Button, Modal, Form} from 'react-bootstrap';
import React, { Component, useState } from "react";

export default class Productcreationmodal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productname:'',
      manufacturer:'',
      partnumber:'',
      productcategory:'',
      dimensions:'',
      productcolours:'',
      marketinginfo:'',
    }
  };

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
      manufacturer: this.stat.manufacturer,
      partnumber: this.state.partnumber,
      productcategory: this.state.productcategory,
      dimensions: this.state.dimensions,
      productcolours: this.state.productcolours,
      marketinginfo: this.state.marketinginfo,
    }

    console.log(product)
  }

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    render (){
      return(
      <>
        <Button variant="primary" className="mx-2" onClick={handleShow}>
          Add a new product
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="textarea" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control type="textarea" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Part Number</Form.Label>
                <Form.Control type="textarea" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product Category</Form.Label>
                <Form.Control type="textarea" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Dimensions</Form.Label>
                <Form.Control type="textarea" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Colours</Form.Label>
                <Form.Control type="textarea" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Marketing Text</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      );
    }
  }
  