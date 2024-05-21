import { isValidObjectId } from "mongoose";
import { IProduct } from "./product.interface";
import Product from "./product.model";
import { customError } from "../../utils";

const createProduct = (data: IProduct): Promise<IProduct> => {
  const product = new Product({ ...data });
  return product.save();
};

const getAllProducts = (): Promise<IProduct[]> => {
  return Product.find();
};

// get single product by property
const getProductByProperty = (
  key: string,
  value: string,
): Promise<IProduct | null> => {
  if (key === "_id") {
    if (!isValidObjectId(value)) {
      throw customError(false, 400, "Invalid productId");
    }
    return Product.findById(value);
  }
  return Product.findOne({ [key]: value });
};

export default {
  createProduct,
  getAllProducts,
  getProductByProperty,
};
