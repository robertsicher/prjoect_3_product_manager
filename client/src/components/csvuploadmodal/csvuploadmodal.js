// import {Button, Modal, } from 'react-bootstrap';
import React from "react";
import { FlatfileButton } from "@flatfile/react";
import axios from "axios";


function Csvuploadmodal() {
    return (
      <> 
        <FlatfileButton
            licenseKey="84df1e75-a4fe-4ef2-8e90-893e261a6576"
            customer={{ userId: "12345" }}
            settings={{
              type: "Contact",
              fields: [
                { label: "Product Name", key: "productname" },
                { label: "Manufacturer", key: "manufacturer" },
                { label: "Part Number", key: "partnumber" },
                { label: "Category", key: "productcategory" },
                { label: "Dimensions", key: "dimensions" },
                { label: "Colours", key: "productcolours" },
                { label: "Product Description", key: "marketinginfo" },
                { label: "Image", key: "image_url" },


              ],
              managed: true
            }}
            onData={async (results) => {
              axios.post('http://localhost:8080/product/csvadd', results.validData)
                .then(res => console.log(res.data));
              return "Done!";
            }}
        >
          Import Contacts
        </FlatfileButton>
      </>
    );
  }
  
  export default Csvuploadmodal;