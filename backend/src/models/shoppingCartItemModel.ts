import { Document, Schema, model, Types } from "mongoose";

export interface IShoppingCartItem extends Document {
  productId: Schema.Types.ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const ShoppingCartItemSchema = new Schema<IShoppingCartItem>({
  productId: {
    type: Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const ShoppingCartItem = model<IShoppingCartItem>(
  "ShoppingCartItem",
  ShoppingCartItemSchema
);
export default ShoppingCartItem;
