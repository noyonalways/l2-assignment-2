import { NextFunction, Request, Response } from "express";
import productService from "./product.service";
import ProductSchema from "./product.validate";

// create product controller
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { success, data, error } = ProductSchema.safeParse(req.body);

    if (!success) {
      const formattedErrors = error.issues.reduce(
        (acc: Record<string, string>, issue) => {
          acc[issue.path.join(".")] = issue.message;
          return acc;
        },
        {},
      );

      return res.status(400).json({
        success: false,
        message: formattedErrors,
      });
    }

    const product = await productService.createProduct({ ...data });
    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

// get products controller
const getAllProducts = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: products,
    });
  } catch (err) {
    next(err);
  }
};

// get single product controller
const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const product = await productService.getProductByProperty("_id", productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

// update single product controller
const updateSingleProduct = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // TODO
  } catch (err) {
    next(err);
  }
};

// delete single product controller
const deleteSingleProduct = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // TODO
  } catch (err) {
    next(err);
  }
};

export default {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
