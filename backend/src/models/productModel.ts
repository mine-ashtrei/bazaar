import { Document, Schema, Types, model } from "mongoose";

export interface IProduct extends Document {
  name: string; // ok
  description: string; 
  supplierId: Types.ObjectId;
  categoryId: Types.ObjectId;
  msrpPrice: number;
  batchPricing: {
    minQuantity: number;
    maxQuantity: number;
    pricePerProduct: number;
  }[];
  availableQuantity: number;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  supplierId: {
    type: Schema.Types.ObjectId,
    ref: "Supplier",
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: false,
  },
  msrpPrice: {
    type: Number,
    required: true,
  },
  batchPricing: [
    {
      minQuantity: { type: Number, required: true },
      maxQuantity: { type: Number, required: true },
      pricePerProduct: { type: Number, required: true },
    },
  ],
  availableQuantity: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
      required: false,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = model<IProduct>("Product", ProductSchema);
export default Product;
