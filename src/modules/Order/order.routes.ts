import { Router } from "express";
import orderController from "./order.controller";
const router: Router = Router();

/**
 * Order routes
 * - /api/orders POST
 * - /api/orders GET
 * - /api/orders?email=user_email_address GET
 */

router
  .route("/")
  .post(orderController.createOrder)
  .get(orderController.getAllOrders);

export default router;
