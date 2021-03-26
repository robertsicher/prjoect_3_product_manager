import {Button, Modal, Card, } from 'react-bootstrap';
import React, {useState } from 'react';
import { Link } from 'react-router-dom';

function TableRow(props) {
  console.log(props)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
                <tr onClick={handleShow}>
                <td className="align-middle">{props.product.partnumber}</td>
                <td className="align-middle p-0"><img width="150" src={props.product.image_url} alt="product"/></td>
                <td className="align-middle">{props.product.productname}</td>
                <td className="align-middle">{props.product.productcategory}</td>
                <td className="align-middle">{props.product.productcolours}</td>
                <td className="align-middle">{props.product.no_of_products}</td>
                </tr>
        
                    <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title>{props.product.partnumber}</Modal.Title>
                    </Modal.Header>
                      <Modal.Body>
                      <Card>
                        <Card.Body>
                          <Card.Title>{props.product.productname} | {props.product.productcategory}</Card.Title>
                          <Card.Img className="mb-5" variant="top" src={props.product.image_url} alt="product image"/>
                          <Card.Text>
                            <h4>Marketing text</h4>
                          {props.product.marketinginfo}
                          </Card.Text>
                          <Card.Text>
                          Colour: {props.product.productcolours}
                          </Card.Text>
                          <Card.Text>
                          Dimensions: {props.product.dimensions}
                          </Card.Text>
                          <Card.Link><Link to={"/edit/"+props.product._id}><i class="fas fa-edit"></i> Edit</Link></Card.Link>
                          <Card.Link><a href="#" onClick={() => { props.deleteProduct(props.product._id) }}><i class="fas fa-trash-alt"></i> Delete</a></Card.Link>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        </Card.Footer>
                      </Card>
                      </Modal.Body>
                    </Modal>
                    </>
  );
}

export default TableRow;