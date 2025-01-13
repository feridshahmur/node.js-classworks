const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});
const ProductModel = mongoose.model("ProductModel", ProductSchema);
app.get("/product", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "data is empty" });
  }
});
app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await ProductModel.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "data is empty" });
  }
});
app.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteditems = await ProductModel.findByIdAndDelete(id);
    res.status(200).json(deleteditems);
  } catch (error) {
    res.status(404).json({ message: "data is empty" });
  }
});
app.post("/product", async (req, res) => {
  try {
    const newItem = ProductModel({ ...req.body });
    await newItem.save();
    res.json({ message: "product added successfully", product: newItem });
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(
    "mongodb+srv://faridshahmur:faridshahmur@cluster0.j5uud.mongodb.net/full1"
  )
  .then(() => console.log("Connected!"));
