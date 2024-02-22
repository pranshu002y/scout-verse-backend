
const ProductModel = require('../../models/productModel');
const uploadModel = require('../../models/uploadModel');

const AuthService = require('../../services/auth.service')
const AuthServiceInstance = new AuthService()

const product = async (req, res) => {
  const { Product, Brand, Category, Price } = req.body;

  try {
    
    const newProduct = await AuthServiceInstance.
    createProduct(Product, Brand, Category, Price);
    res.json(newProduct);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in creating product");
  }
};


const uploadImage = async (req,res) =>{
  const {image_url,author} = req.body;
  try{
    const image = await AuthServiceInstance.
    uploadImage(image_url,author);
    res.json(image);
  }
  catch (err) {
    console.log(err.message);
    res.status(500).send("Error in creating product");
  }
  console.log(req.body);
}



const getAllImage = async(req,res)=>{
 try{
  const image = await uploadModel.find({});
  res.status(200).json(image);
 }
 catch(err){
res.status(400).json({message: "not able to find products"});
 }
}

const getAllproduct = async(req,res)=>{
  try{
   const products = await ProductModel.find({});
   res.status(200).json(products);
  }
  catch(err){
 res.status(400).json({message: "not able to find products"});
  }
 }



module.exports = {product,getAllproduct,uploadImage,getAllImage};
