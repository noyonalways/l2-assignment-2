import { Schema, model } from "mongoose";
import { IInventory, IProduct, IVariant } from "./product.interface";

const variantSchema = new Schema<IVariant>({
  type: {
    type: String,
    required: [true, "variant type is required"],
  },
  value: {
    type: String,
    required: [true, "variant value is required"],
  },
});

const inventorySchema = new Schema<IInventory>({
  quantity: {
    type: Number,
    required: [true, "inventory quantity is required"],
  },
  inStock: {
    type: Boolean,
    required: [true, "inventory inStock is required"],
    default: function () {
      return this.quantity > 0;
    },
  },
});

inventorySchema.pre("save", function (next) {
  this.inStock = this.quantity > 0;
  next();
});

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, "product name is required"],
    minlength: [3, "Name must be more than 3 characters"],
  },
  description: {
    type: String,
    required: [true, "product description is required"],
  },
  price: {
    type: Number,
    required: [true, "product price is required"],
    validate: {
      validator: function (value: number) {
        return value > 0;
      },
      message: "Price {VALUE} must be greater than 0",
    },
  },
  category: {
    type: String,
    required: [true, "product category is required"],
  },
  tags: {
    type: [String],
    required: [true, "product tags is required"],
  },
  variants: {
    type: [variantSchema],
    required: [true, "product variants is required"],
  },
  inventory: {
    type: inventorySchema,
    required: [true, "product inventory is required"],
  },
});

const Product = model<IProduct>("Product", productSchema);
export default Product;
