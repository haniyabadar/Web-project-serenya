const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST a new product
router.post("/", async (req, res) => {
  const { name, category, price, stock } = req.body;

  const product = new Product({
    name,
    category,
    price,
    stock
  });

  try {
    const newProduct = await product.save();
    res.status(201).json({ 
      success: true, 
      message: "Product added successfully!", 
      product: newProduct 
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE a product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Product deleted successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
