import { Router } from "express";
import orderController from "./order.controller";
const router: Router = Router();

/**
 * Order routes
 * DONE: - /api/orders POST
 * DONE: - /api/orders GET
 * DONE: - /api/orders?email=user_email_address GET
 */

router
  .route("/")
  .post(orderController.createOrder)
  .get(orderController.getAllOrders);

export default router;
