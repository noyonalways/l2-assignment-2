import { NextFunction, Request, Response } from "express";

// create product controller
const createProduct = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    next(err);
  }
};

// get products controller
const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO
  } catch (err) {
    next(err);
  }
};

// get single product controller
const getSingleProduct = (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO
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
