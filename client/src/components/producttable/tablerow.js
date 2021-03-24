import { PhotoPlaceholder } from 'react-placeholder-image';

function TableRow(props) {
  console.log(props)
  return (
                <tr>
                <td className="align-middle">{props.product.partnumber}</td>
                <td className="align-middle p-0"><img width="200" src={props.product.image_url}/></td>
                <td className="align-middle">{props.product.productname}</td>
                <td className="align-middle">{props.product.marketinginfo}</td>
                <td className="align-middle">{props.product.productcategory}</td>
                </tr>
  );
}

export default TableRow;