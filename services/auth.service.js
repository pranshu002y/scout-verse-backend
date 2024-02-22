const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ProductModel = require('../models/productModel');
const uploadModel = require('../models/uploadModel');
class AuthService {
  signup = async (firstname, lastname, email, password) => {
    try {
      let user = await User.findOne({ email });
      if (user) {
        return { error: 'User already exists. Please login.' };
      }

      user = new User({
        firstname,
        lastname,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const token = this.generateToken(user.id);
      return { token };
    } catch (err) {
      console.error(err.message);
      return { error: 'Error in creating account' };
    }
  };

  login = async (email, password) => {
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return { error: 'User not found. Please signup.' };
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return { error: 'Incorrect Password' };
      }

      const token = this.generateToken(user.id);
      return { token };
    } catch (err) {
      console.error(err.message);
      return { error: 'Error in login' };
    }
  };

  update = async (data, id) => {
    try {
      let user = await User.findByIdAndUpdate(id, data, { new: true });
      if (!user) {
        return { error: 'User not found' };
      }
      return { message: 'Updated successfully', user };
    } catch (err) {
      console.error(err.message);
      return { error: 'Error in updating user' };
    }
  };

  createProduct = async (Product,
    Category,
    Brand,
    Price) => {
    try {
      let existingProduct = await ProductModel.findOne({Category});

      if (existingProduct) {
        return { error: 'Product already exists. .' };
      }

      // Create the new product here and save it to the database
      const newProduct = new ProductModel({
        Product,
        Category,
        Brand,
        Price,
      });

      await newProduct.save();

      return { success: 'Product created successfully.' };
    } catch (err) {
      console.error(err.message);
      return { error: 'Error in creating product' };
    }
  }

  // createProduct = async (Product,
  //   Category,
  //   Brand,
  //   Price) => {
  //   try {
  //     let existingProduct = await ProductModel.findOne({});

  //     if (existingProduct) {
  //       return { error: 'Product already exists. .' };
  //     }

  //     // Create the new product here and save it to the database
  //     const newProduct = new ProductModel({
  //       Product,
  //       Category,
  //       Brand,
  //       Price,
  //     });

  //     await newProduct.save();

  //     return { success: 'Product created successfully.' };
  //   } catch (err) {
  //     console.error(err.message);
  //     return { error: 'Error in creating product' };
  //   }
  // }


  uploadImage = async (image_url,author) => {
    try {
      // Assuming you have a field named 'image_url' in your database schema
      let existingProduct = await uploadModel.findOne({ image_url,author });
  
      if (existingProduct) {
        return { error: 'Image already exists.' };
      }
  
      // Create the new product here and save it to the database
      const uploadImage = new uploadModel({
        image_url,author,
      });
  
      await uploadImage.save();
  
      return { success: 'Image created successfully.' };
    } catch (err) {
      console.error(err.message);
      return { error: 'Error in creating image' };
    }
 
  };

  
 
  generateToken = (userId) => {
    const payload = {
      user: {
        id: userId,
      },
    };
    return jwt.sign(payload, process.env.JWT_STRING, {
      expiresIn: 3600, // 1 hour (adjust as needed)
    });
  };
}

module.exports = AuthService;
