const express = require("express");
 const {
    getAllData,
    getDAtaById,
    deleteDataById,
    postData,
 } = require('../controllers/index')
 const router = express.Router()

 router.get("/", getAllData);
 router.get("/:id", getDAtaById);
 router.delete("/:id", deleteDataById);
 router.post("/", postData);

 
 module.exports = router;