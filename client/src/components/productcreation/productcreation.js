import { Container, Row } from "react-bootstrap";
import Csvuploadmodal from "../csvuploadmodal/csvuploadmodal";
import Productcreationmodal from "../productcreationformmodal/creationformmodal";


function Productcreation() {
  return (
    <div>
        <h1>Add a new product</h1>
        <Container>
            <Row>
                <Productcreationmodal />
                <Csvuploadmodal/>
            </Row>
        </Container>
    </div>
  );
}

export default Productcreation;