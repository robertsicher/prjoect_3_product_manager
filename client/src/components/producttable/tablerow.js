import { PhotoPlaceholder } from 'react-placeholder-image';

function TableRow(props) {
  console.log(props)
  return (
                <tr>
                <td className="align-middle">{props.product.partnumber}</td>
                <td className="align-middle p-0"><PhotoPlaceholder width={75} height={75}/></td>
                <td className="align-middle">{props.product.productname}</td>
                <td className="align-middle">{props.product.marketinginfo}</td>
                <td className="align-middle">{props.product.productcategory}</td>
                </tr>
  );
}

export default TableRow;