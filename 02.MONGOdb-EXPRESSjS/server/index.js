const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require('./routes/index');
const port = 8080;
const app = express();

const cors = require('cors')

app.use(cors());

app.use(express.json());


app.use('/users', UserRouter);


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