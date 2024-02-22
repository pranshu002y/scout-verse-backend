const express = require("express");
const router = express.Router();


const product = require("../controllers/authentication/product");

router.post("/upload/image",product.product);
router.get("/getimage/image",product.getAllImage);





module.exports = router;
