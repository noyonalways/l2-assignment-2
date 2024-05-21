import { NextFunction, Request, Response, Router } from "express";
import { TCustomError } from "../types";
import productRoutes from "../modules/Product/product.routes";
import orderRoutes from "../modules/Order/order.routes";
const router: Router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

router.get("/health", (_req: Request, res: Response) => {
  res.status(200).send("OK");
});

// main routes
router.use("/api/products", productRoutes);
router.use("/api/orders", orderRoutes);

router.use((_req: Request, _res: Response, next: NextFunction) => {
  const err: TCustomError = new Error("Route not found");
  err.status = 404;
  err.success = false;

  next(err);
});

router.use(
  (
    err: TCustomError,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): void => {
    res.status(err.status || 500).json({
      success: err.success,
      message: err.message,
    });
  },
);

export default router;
