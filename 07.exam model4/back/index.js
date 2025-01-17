const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const port = 8080
app.use(express.json());
app.use(cors())

  
const Schema = mongoose.Schema;
const MenuSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});
const Product = mongoose.model("Product", MenuSchema);
app.get('/products', async(req, res) => {
  // res.send('Hello World!')
  try {
    const menues = await Product.find({})
    res.status(200).json(menues)
  } catch (error) {
    res.status(500).json(error.message)

    
  }
  
})
app.get('/products/:id', async(req, res) => {
  // res.send('Hello World!')
  const {id} = req.params
  try {
    const menues = await Product.findById(id)
    res.status(200).json(menues)
  } catch (error) {
    res.status(500).json(error.message)

    
  }
  
})
app.delete('/products/:id', async(req, res) => {
  // res.send('Hello World!')
  const {id} = req.params
  try {
    const deletedmenues = await Product.findByIdAndDelete(id)
    res.status(200).json(deletedmenues)
  } catch (error) {
    res.status(404).json(error.message)

    
  }
  
})
app.post('/products', async(req, res) => {
 try {
  const newItem =  Product({...req.body})
  await newItem.save()
  res.json({ message: "product added successfully", product: newItem });
 } catch (error) {
  console.log(error);
  
 }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb+srv://faridshahmur:faridshahmur@cluster0.j5uud.mongodb.net/')
  .then(() => console.log('Connected!'));