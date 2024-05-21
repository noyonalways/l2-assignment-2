import { isValidObjectId } from "mongoose";
import { IProduct } from "./product.interface";
import Product from "./product.model";
import { customError } from "../../utils";

// create new product in db
const createProduct = (data: IProduct) => {
  const product = new Product({ ...data });
  return product.save();
};

// get all products form db
const getAllProducts = () => {
  // TODO: handle search query
  return Product.find();
};

// get single product by property from db
const getProductByProperty = (key: string, value: string) => {
  if (key === "_id") {
    if (!isValidObjectId(value)) {
      throw customError(false, 400, "Invalid productId");
    }
    return Product.findById(value);
  }
  return Product.findOne({ [key]: value });
};

// delete single product from db
const deleteSingleProduct = async (productId: string) => {
  if (!isValidObjectId(productId)) {
    throw customError(false, 400, "Invalid productId");
  }
  const product = await Product.findByIdAndDelete(productId);
  if (!product) {
    throw customError(false, 404, "Product not found");
  }
  return null;
};

export default {
  createProduct,
  getAllProducts,
  getProductByProperty,
  deleteSingleProduct,
};
