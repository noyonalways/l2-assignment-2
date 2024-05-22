import { IOrder } from "./order.interface";
import productService from "../Product/product.service";
import Order from "./order.model";
import { customError } from "../../utils";

const createOrder = async (data: IOrder) => {
  if (data.quantity <= 0) {
    throw customError(false, 400, "Invalid quantity");
  }

  const product = await productService.getProductByProperty(
    "_id",
    data.productId,
  );
  if (!product) {
    throw customError(false, 404, "Product not found");
  }
  if (
    product.inventory.quantity < data.quantity ||
    product.inventory.quantity <= 0
  ) {
    throw customError(
      false,
      400,
      "Insufficient quantity available in inventory",
    );
  }

  product.inventory.quantity -= data.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  const order = new Order({ ...data, price: product.price });
  return order.save();
};

const getAllOrders = (email: string) => {
  if (!email) {
    return Order.find();
  }
  return Order.find({ email });
};

export default {
  createOrder,
  getAllOrders,
};
