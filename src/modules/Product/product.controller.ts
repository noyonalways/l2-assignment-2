import { NextFunction, Request, Response } from "express";
import productService from "./product.service";
import productSchema from "./product.validate";
import { IProduct } from "./product.interface";

// create product controller
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { success, data, error } = productSchema.safeParse(req.body);

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

    const product = await productService.createProduct({
      ...(data as IProduct),
    });
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
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { searchTerm } = req.query;
    const products = await productService.getAllProducts(searchTerm as string);

    if (products.length < 1) {
      return res.status(404).json({
        success: false,
        message: "Products not found!",
      });
    }

    if (!searchTerm) {
      return res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: products,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
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
const updateSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const { success, data, error } = productSchema
      .partial()
      .safeParse(req.body);

    if (!success) {
      const formattedErrors = error.issues.reduce(
        (acc: Record<string, string>, issue) => {
          if (issue.code === "unrecognized_keys") {
            issue.keys.forEach((key) => {
              acc[key] = `Unrecognized key: '${key}'`;
            });
          } else {
            acc[issue.path.join(".")] = issue.message;
          }
          return acc;
        },
        {},
      );

      return res.status(400).json({
        success: false,
        message: formattedErrors,
      });
    }

    const result = await productService.updateSingleProduct(productId, {
      ...(data as IProduct),
    });

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// delete single product controller
const deleteSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const result = await productService.deleteSingleProduct(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
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
