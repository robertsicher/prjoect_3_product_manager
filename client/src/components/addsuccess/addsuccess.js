import { Container, Row } from "react-bootstrap";
import Csvuploadmodal from "../csvuploadmodal/csvuploadmodal";
import Productcreationmodal from "../productcreationformmodal/creationformmodal";


function Addsuccess() {
  return (
    <div>
        <h1>Success! You added a new product</h1>
        <Container>
            <h2>Add Another product?</h2>
            <Row>
                <Productcreationmodal />
                <Csvuploadmodal/>
            </Row>
        </Container>
    </div>
  );
}

export default Addsuccess;