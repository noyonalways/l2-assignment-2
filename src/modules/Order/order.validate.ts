import { z } from "zod";

const OrderSchema = z
  .object({
    email: z.string().email({ message: "provide a valid email address" }),
    productId: z.string({
      invalid_type_error: "provide a valid productId",
      required_error: "product is required",
    }),
    price: z
      .number({
        invalid_type_error: "price must be a number",
        required_error: "price is required",
      })
      .positive({ message: "price must be grater than 0" }),
    quantity: z
      .number({
        invalid_type_error: "quantity must be a number",
        required_error: "quantity is required",
      })
      .int({ message: "quantity must be a integer" })
      .positive({ message: "quantity must be greater than 0" }),
  })
  .strict();

export default OrderSchema;
