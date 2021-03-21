import { PhotoPlaceholder } from 'react-placeholder-image';

function TableRow() {
  return (
                <tr>
                <td className="align-middle">1234567890</td>
                <td className="align-middle p-0"><PhotoPlaceholder width={75} height={75}/></td>
                <td className="align-middle">ReSet Call Point</td>
                <td className="align-middle">Red</td>
                <td className="align-middle">46x46x4</td>
                </tr>
  );
}

export default TableRow;