const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080
app.use(cors())
app.use(express.json());
let products = [
  {
    id: 2,
    description: "Sweet and savory sauces delights spreads and seasonings",
    name: "Condiments",
  },
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: " Beverages",
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections",
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products",
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals",
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry",
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce",
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood",
  },
];

app.get('/products', (req, res) => {
 if (products.length>0) {
   res.status(200).send(products)
 }else{
  res.status(204).send(
    {message:"data is empty"}
  )
 }
 
})
app.get('/products/:id', (req, res) => {
  // res.send('Hello World!')
  const {id} = req.params
  const product = products.find((p) => p.id == id);
  if (product !== undefined) {
    res.status(200).send(
     product
    );
  } else {
    res.status(404).send({
      message: "not found!",
    });
  }
})
app.delete('/products/:id', (req, res) => {
  // res.send('Hello World!')
  const {id} = req.params
  const index = products.findIndex((p)=> p.id ==id)
    if (index=== -1) {
      res.status(404).send("no such data")
    }
    else{
      const deletedItems = products.slice(index,1)
      res.status(200).send(deletedItems)
    }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})