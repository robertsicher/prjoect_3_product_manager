import {Form, Row, Col, Container, Button} from 'react-bootstrap'


function Login() {
  return (
    <Container className="mt-2">
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control defaultValue="email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Button variant="secondary" size="lg">
            Log in
          </Button>
        </Form>
    </Container>
  );
}

export default Login;


