const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const port = 8080;
const app = express();

const cors = require("cors");

app.use(cors());

const blogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});
const blogModel = mongoose.model("Blog", blogSchema);

app.get("/blogs", async (req, res) => {
  // res.send("Hello World!");
  try {
    const blogs = await blogModel.find({});
    res.status(200).send(blogs);
  } catch (error) {
    console.log(error);
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
