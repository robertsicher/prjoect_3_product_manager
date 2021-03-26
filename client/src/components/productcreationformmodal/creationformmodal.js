import {Button, Form, Modal} from 'react-bootstrap';
import React, { Component } from "react";

import axios from "axios";

export default class Productcreationmodal extends Component {
  constructor(props) {
    super(props);

    this.onChangeProductname = this.onChangeProductname.bind(this);
    this.onChangeManufacturer = this.onChangeManufacturer.bind(this);
    this.onChangePartNumber = this.onChangePartNumber.bind(this);
    this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
    this.onChangeDimensions = this.onChangeDimensions.bind(this);
    this.onChangeProductColours = this.onChangeProductColours.bind(this);
    this.onChangeMarketingInfo = this.onChangeMarketingInfo.bind(this);
    this.onNumberOfProductChange = this.onNumberOfProductChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      productname: "",
      manufacturer: "",
      partnumber: "",
      productcategory: "",
      dimensions: "",
      productcolours: "",
      marketinginfo: "",
      image_url:"",
      showHide: false,
      no_of_products:""
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  onChangeProductname(e) {

    this.setState({
      productname: e.target.value,
    });
  }
  onNumberOfProductChange(e){
    this.setState({
      no_of_products: e.target.value
    })
  }

  onChangeManufacturer(e) {
    this.setState({
      manufacturer: e.target.value,
    });
  }

  onChangePartNumber(e) {
    this.setState({
      partnumber: e.target.value,
    });
  }

  onChangeProductCategory(e) {
    this.setState({
      productcategory: e.target.value,
    });
  }

  onChangeDimensions(e) {
    this.setState({
      dimensions: e.target.value,
    });
  }

  onChangeProductColours(e) {
    this.setState({
      productcolours: e.target.value,
    });
  }

  onChangeMarketingInfo(e) {
    this.setState({
      marketinginfo: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      productname: this.state.productname,
      manufacturer: this.state.manufacturer,
      partnumber: this.state.partnumber,
      productcategory: this.state.productcategory,
      dimensions: this.state.dimensions,
      productcolours: this.state.productcolours,
      marketinginfo: this.state.marketinginfo,
      image_url:this.state.image_url,
      no_of_products:this.state.no_of_products
    };

    console.log(product);

    axios.post("http://localhost:8080/product/add", product).then((res) => console.log(res.data));

    window.location = "/productsuccess";
  }

  // const [show, setShow] = useState(false);

  // handleClose = () => setShow(false);
  // handleShow = () => setShow(true);

  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "phase2projectbirmingham",
        uploadPreset: "xuimcgyf",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.setState({
            image_url:result.info.url
          })
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    return (
      <>
                  <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                    Launch demo modal
                  </Button>

                  <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="textarea" required value={this.state.productname} onChange={this.onChangeProductname} />
                        <button type="button"
                          onClick={() => {
                            widget.open();
                          }}
                        >
                          Upload photo
                        </button>
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Part Number</Form.Label>
                        <Form.Control type="textarea" required value={this.state.partnumber} onChange={this.onChangePartNumber} />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>No Of Products</Form.Label>
                        <Form.Control type="textarea" required value={this.state.no_of_products} onChange={this.onNumberOfProductChange} />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control type="textarea" required value={this.state.manufacturer} onChange={this.onChangeManufacturer} />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Category</Form.Label>
                        <Form.Control type="textarea" required value={this.state.productcategory} onChange={this.onChangeProductCategory} />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Dimensions</Form.Label>
                        <Form.Control type="textarea" required value={this.state.dimensions} onChange={this.onChangeDimensions} />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Colours</Form.Label>
                        <Form.Control type="textarea" required value={this.state.productcolours} onChange={this.onChangeProductColours} />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Marketing Text</Form.Label>
                        <Form.Control as="textarea" rows={5} required value={this.state.marketinginfo} onChange={this.onChangeMarketingInfo} />
                      </Form.Group>
                      <Button variant="primary" type="submit" value="Create New Product">
                        Add Product
                      </Button>
                      <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                      </Button>
                    </Form>
                    </Modal.Body>
                  </Modal>
            
      </>
    );
  }
}
