
// const ProductModel = require('../models/productModel');
// class ProductService {
// createProduct = async (firstname, lastname, category, price) => {
//     try {
//       let existingProduct = await ProductModel.findOne({ category });

//       if (existingProduct) {
//         return { error: 'Product already exists. .' };
//       }

//       // Create the new product here and save it to the database
//       const newProduct = new ProductModel({
//         firstname,
//         lastname,
//         category,
//         price,
//       });

//       await newProduct.save();

//       return { success: 'Product created successfully.' };
//     } catch (err) {
//       console.error(err.message);
//       return { error: 'Error in creating product' };
//     }
//   }}