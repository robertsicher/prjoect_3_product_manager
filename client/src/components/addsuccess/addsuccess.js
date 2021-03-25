import { Container, } from "react-bootstrap";
import Productcreationmodal from "../productcreationformmodal/creationformmodal";


function Addsuccess() {
  return (
    <div>
        <h1>Success! You added a new product</h1>
        <Container>
            <h2>Add Another product?</h2>
                <Productcreationmodal />
        </Container>
    </div>
  );
}

export default Addsuccess;