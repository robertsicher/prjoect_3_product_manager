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
  })
);

module.exports = Product;
