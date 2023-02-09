import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// register Product
const registerProduct = asyncHandler(async (req, res) => {
  const { name, cost, category, image_src, brand, quantity } = req.body;
  try {
    const oldProd = await Product.findOne({ name });
    if (oldProd) {
      return res.send({ error: "Product Exists Already" });
    }
    await Product.create({
      name,
      cost,
      category,
      image_src,
      brand,
      quantity,
    });
    res.send({ status: "OK" });
  } catch (error) {
    res.send({ status: "Error" });
  }
});

//Fetch all Data
const fetchallData = asyncHandler(async (req, res) => {
  Product.find((err, val) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.json(val);
    }
  });
});

//Fetch product by ID
const fetchdatabyID = (req, res) => {
  let fetchid = req.params._id;
  Product.findById(fetchid, (err, val) => {
    if (err) {
      res.status(400).send("Error");
    } else {
      res.status(200).send(val);
    }
  });
};

export { registerProduct, fetchallData, fetchdatabyID };
