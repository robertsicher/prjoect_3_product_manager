import { Table } from "react-bootstrap";
import { PhotoPlaceholder } from 'react-placeholder-image';

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
                <tr>
                <td className="align-middle">1234567890</td>
                <td className="align-middle p-0"><PhotoPlaceholder width={75} height={75}/></td>
                <td className="align-middle">ReSet Call Point</td>
                <td className="align-middle">Red</td>
                <td className="align-middle">46x46x4</td>
                </tr>
                <tr>
                <td>2</td>
                <td><PhotoPlaceholder width={75} height={75}/></td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td><PhotoPlaceholder width={75} height={75}/></td>
                <td>Thornton</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
  );
}

export default ProductTable;

