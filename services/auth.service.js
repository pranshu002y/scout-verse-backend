
const SoalModel = require('../models/SoalModel');
class AuthService {

  createImage = async (
    company,
    Image,
    ) => {
    try {
      let existingProduct = await SoalModel.findOne({company});

      if (existingProduct) {
        return { error: 'image already exists. .' };
      }

      // Create the new product here and save it to the database
      const newImage = new SoalModel({
        company,
    Image,
      });

      await newImage.save();

      return { success: 'Product created successfully.' };
    } catch (err) {
      console.error(err.message);
      return { error: 'Error in creating product' };
    }
  }

}

module.exports = AuthService;
