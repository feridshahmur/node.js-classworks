const UserModel = require('../modules/index');


const getAllData =  async (req, res) => {
    // res.send("Hello World!");
    try {
      const users = await UserModel.find({});
      res.status(200).send(users)
    } catch (error) {
      console.log(error);
    }
}


const getDAtaById = async (req, res) => {
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
}


const deleteDataById = async (req, res) => {
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
}


const postData =  async (req, res) => {
    // res.send("Hello World!");
    const { title, description, price, imageUrl } = req.body;
  
    if (!title || !description || !price || !imageUrl) {
      return res
        .status(400)
        .json({ message: "Bad Request! All fileds should be add!" });
    }
    try {
      const newProduct = UserModel({ ...req.body });
      await newProduct.save();
      res.status(201).json({
        message: "product added successfully!",
        product: newProduct,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getAllData,
    getDAtaById,
    deleteDataById,
    postData
}