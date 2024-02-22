
const SoalModel = require('../../models/SoalModel');

const AuthService = require('../../services/auth.service')
const AuthServiceInstance = new AuthService()

const product = async (req, res) => {
  const { company, Image } = req.body;

  try {
    
    const newProduct = await AuthServiceInstance.
    createImage(company, Image);
    res.json(newProduct);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in creating product");
  }
};





const getAllImage = async(req,res)=>{
 try{
  const image = await SoalModel.find({});
  res.status(200).json(image);
 }
 catch(err){
res.status(400).json({message: "not able to find products"});
 }
}





module.exports = {product,getAllImage};
