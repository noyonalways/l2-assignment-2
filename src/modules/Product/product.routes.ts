import { Router } from "express";
import productController from "./product.controller";
const router: Router = Router();

/**
 * Product Routes:
 * DONE: - /api/products GET
 * DONE: - /api/products POST
 * DONE: - /api/products/:productId GET
 * DONE: - /api/products/:productId UPDATE
 * DONE: - /api/products/:productId DELETE
 * TODO: - /api/products?searchTerm=product_name GET
 */

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:productId")
  .get(productController.getSingleProduct)
  .put(productController.updateSingleProduct)
  .delete(productController.deleteSingleProduct);

export default router;
