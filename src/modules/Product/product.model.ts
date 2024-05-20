import { Schema, model } from "mongoose";
import { IInventory, IProduct, IVariant } from "./product.interface";

const VariantSchema = new Schema<IVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const InventorySchema = new Schema<IInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    minlength: [3, "Name must be more than 3 characters"],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: function (value: number) {
        return value > 0;
      },
      message: "Price {VALUE} must be greater than 0",
    },
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [VariantSchema],
    required: true,
  },
  inventory: {
    type: InventorySchema,
    required: true,
  },
});

const Product = model<IProduct>("Product", ProductSchema);
export default Product;
