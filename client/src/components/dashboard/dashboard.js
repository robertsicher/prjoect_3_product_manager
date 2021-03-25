import { Container } from "react-bootstrap";
import Csvuploadmodal from "../csvuploadmodal/csvuploadmodal";


function Dashboard() {
  return (
    <div>
        <Container className="mt-2">
          <h1>Dashboard</h1>   
          <Csvuploadmodal />
        </Container>
    </div>
  );
}

export default Dashboard;