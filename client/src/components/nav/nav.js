import {Navbar, NavDropdown, Nav, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Navigation() {
  
  return (
<Navbar bg="light" expand="md">
    <Navbar.Brand href="/">Management Dashboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
            <NavDropdown title="Product Actions" id="basic-nav-dropdown">
            <NavDropdown.Item href="/new-product">Add a Product</NavDropdown.Item>
            <NavDropdown.Item href="/catalogue">Product Catalogue</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    <Form inline>
      <Link to="/login"><Button className="mx-1" variant="outline-secondary">Account / Login</Button></Link>
    </Form>
    </Navbar.Collapse>
</Navbar>
  );
}

export default Navigation;


