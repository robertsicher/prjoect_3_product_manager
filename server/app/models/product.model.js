const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
  
    productname: {
      type: String,
      unique: true,
      trim: true
    },
    manufacturer: {
      type: String,
      trim: true
    },
    partnumber: {
      type: String,
      unique: true,
      trim: true
    },
    productcategory: {
      type: String,
      trim: true
    },
    dimensions: {
      type: String,
      trim: true
    },
    productcolours: {
      type: String,
      trim: true
    },
    marketinginfo: {
      type: String,
      trim: true
    },
    image_url:{
      type:String,
      trim:true
    },
    dateOfOrder:{
      type:String,
      trim :true
    },
    no_of_products:{
      type:String,
      trim :true
    }
  })
);

module.exports = Product;
