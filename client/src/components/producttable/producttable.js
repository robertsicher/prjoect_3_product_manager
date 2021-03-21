import { Table } from "react-bootstrap";
import TableRow from "./tablerow";

function ProductTable() {
  return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th style={{width: "3%"}}>Product #</th>
                <th style={{width: "5%"}}>Thumbnail</th>
                <th style={{width: "5%"}}>Product Title</th>
                <th style={{width: "15%"}}>Product Description</th>
                <th style={{width: "15%"}}>Dimensions</th>
                </tr>
            </thead>
            <tbody>
                <TableRow />
            </tbody>
        </Table>
  );
}

export default ProductTable;

