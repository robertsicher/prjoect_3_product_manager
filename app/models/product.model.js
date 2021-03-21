const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    productname: {
      type: String,
      unique: true,
      trim: true
    },
    // manufacturer: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true
    // },
    // partnumber: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true
    // },
    // productcategory: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true
    // },
    // dimensions: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true
    // },
    // productcolours: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true
    // },
    // marketinginfo: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true
    // },
  })
);

module.exports = Product;
