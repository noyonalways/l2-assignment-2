import { Router } from "express";
import productController from "./product.controller";
const router: Router = Router();

/**
 * Product Routes:
 * - /api/products GET
 * - /api/products POST
 * - /api/products/:productId GET
 * - /api/products/:productId UPDATE
 * - /api/products/:productId DELETE
 * - /api/products?searchTerm=product_name GET
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
