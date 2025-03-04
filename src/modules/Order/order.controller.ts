import { NextFunction, Request, Response } from "express";
import orderService from "./order.service";
import OrderSchema from "./order.validate";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, success, error } = OrderSchema.safeParse(req.body);

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

    const order = await orderService.createOrder(data);
    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: order,
    });
  } catch (err) {
    next(err);
  }
};

const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.query;
    const orders = await orderService.getAllOrders(email as string);

    if (orders.length < 1) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    if (!email) {
      return res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: orders,
      });
    }

    res.status(200).json({
      success: true,
      message: `Orders fetched successfully for user '${email}'!`,
      data: orders,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  createOrder,
  getAllOrders,
};
