import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Navigation() {
  
  return (
<Navbar bg="light" expand="md">
    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Product Actions" id="basic-nav-dropdown">
            <NavDropdown.Item href="/catalogue">Product Catalogue</NavDropdown.Item>
            <NavDropdown.Item href="/new-product">New Product</NavDropdown.Item>
            <NavDropdown.Item href="/export">Export Catalogue</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="mx-1" variant="outline-secondary">Search</Button>
      <Link to="/login"><Button className="mx-1" variant="outline-secondary">Login</Button></Link>
    </Form>
    </Navbar.Collapse>
</Navbar>
  );
}

export default Navigation;


