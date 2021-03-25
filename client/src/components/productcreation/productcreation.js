import { Container, } from "react-bootstrap";
import Productcreationmodal from "../productcreationformmodal/creationformmodal";


function Productcreation() {
  return (
    <div>
        <h1>Add a new product</h1>
        <Container>
                <Productcreationmodal />
        </Container>
    </div>
  );
}

export default Productcreation;