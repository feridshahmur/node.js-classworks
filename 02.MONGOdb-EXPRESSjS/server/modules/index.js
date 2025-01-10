const mongoose = require("mongoose");

const { Schema } = mongoose;
const usersSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  
});
const UserModels = mongoose.model("Users", usersSchema);
module.exports = UserModels;
