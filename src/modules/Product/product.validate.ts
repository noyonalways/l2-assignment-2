import { z } from "zod";

const variantSchema = z.object({
  type: z.string({ message: "variant type is required" }),
  value: z.string({ message: "variant1 value is required" }),
});

const inventorySchema = z.object(
  {
    quantity: z.number({
      invalid_type_error: "quantity must be a number",
      required_error: "quantity is required",
    }),
    inStock: z
      .boolean({ invalid_type_error: "inStock must be a boolean" })
      .optional(),
  },
  { message: "inventory is required" },
);

const productSchema = z
  .object({
    name: z
      .string({ message: "product name is required" })
      .min(3, "product name must be more than 3 characters"),
    description: z
      .string({ message: "product description is required" })
      .min(15, "product description must be more than 15 characters"),
    price: z
      .number({
        invalid_type_error: "price must be a number",
        required_error: "price is required",
      })
      .positive({ message: "price must be grater than 0" }),
    category: z.string({ message: "Product category is required" }),
    tags: z.array(z.string({ message: "Product tags is" })),
    variants: z.array(variantSchema, { message: "variants is required" }),
    inventory: inventorySchema,
  })
  .strict();

export default productSchema;
