import { Document, Schema, model, Types } from "mongoose";

export interface IShoppingCart extends Document {
  userId: Schema.Types.ObjectId;
  items: [Schema.Types.ObjectId];
  createdAt: Date;
  updatedAt: Date;
}

const ShoppingCartSchema = new Schema<IShoppingCart>({
  userId: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      type: Types.ObjectId,
      ref: "ShoppingCartItem",
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

const ShoppingCart = model<IShoppingCart>("ShoppingCart", ShoppingCartSchema);
export default ShoppingCart;
