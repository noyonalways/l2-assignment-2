import { z } from "zod";

const VariantSchema = z.object({
  type: z.string({ message: "variant type is required" }),
  value: z.string({ message: "variant1 value is required" }),
});

const InventorySchema = z.object(
  {
    quantity: z.number({
      invalid_type_error: "quantity must be a number",
      required_error: "quantity is required",
    }),
    inStock: z.boolean({ message: "inStock is required" }),
  },
  { message: "inventory is required" },
);

const ProductSchema = z.object({
  name: z
    .string({ message: "product name is required" })
    .min(3, "product name must be more than 3 characters"),
  description: z
    .string({ message: "product description is required" })
    .min(15, "product description must be more than 15 characters"),
  price: z
    .number({
      invalid_type_error: "product price must be a number",
      required_error: "product price is required",
    })
    .min(0, "product price must be greater than 0"),
  category: z.string({ message: "Product category is required" }),
  tags: z.array(z.string({ message: "Product tags is" })),
  variants: z.array(VariantSchema, { message: "variants is required" }),
  inventory: InventorySchema,
});

export default ProductSchema;
