const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
  sku: String
});
module.exports = mongoose.model("Product", productSchema);
