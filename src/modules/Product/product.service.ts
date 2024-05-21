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

// update single product into db
const updateSingleProduct = async (productId: string, newData: IProduct) => {
  if (!isValidObjectId(productId)) {
    throw customError(false, 400, "Invalid productId");
  }

  // validate the product inventory 'inStock' status based on inventory 'quantity'
  const validateData = {
    ...newData,
    inventory: {
      quantity: newData.inventory.quantity,
      inStock: newData.inventory.quantity > 0,
    },
  };

  const product = await Product.findByIdAndUpdate(productId, validateData, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    throw customError(false, 404, "Product not found");
  }
  return product;
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
  updateSingleProduct,
  deleteSingleProduct,
};
