import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  productId: {
    type: String,
    required: [true, "product id is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
});

const Order = model<IOrder>("Order", orderSchema);
export default Order;
