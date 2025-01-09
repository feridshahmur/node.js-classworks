const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const port = 8080;
const app = express();

const cors = require('cors')

app.use(cors());

app.use(express.json());
const usersSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  
});
const UserModel = mongoose.model("Users", usersSchema);



app.get("/users", async (req, res) => {
  // res.send("Hello World!");
  try {
    const users = await UserModel.find({});
    res.status(200).send(users)
  } catch (error) {
    console.log(error);
  }
});
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await UserModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ message: "failed to delete! | product not found!" });
    }
    res.status(200).json({
      deletedProduct: deletedProduct,
      message: "deleted successfully!",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/users/:id", async (req, res) => {
  // res.send("Hello World!");
  const { id } = req.params;

  try {
    const product = await UserModel.findById(id);

    if (!product) {
      return res.status(404).json({ message: "product not found!" });
    }

    res.status(200).json({ data: product, message: "success!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
mongoose
  .connect(
    "mongodb+srv://faridshahmur:faridshahmur@cluster0.j5uud.mongodb.net/farid"
  )
  .then(() => {
    console.log("conntected");
   
    
  });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });