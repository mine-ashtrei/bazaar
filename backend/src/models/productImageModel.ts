import { Document, Schema, Types, model } from "mongoose";

export interface IPresignedUrl {
  presignedUrl: string;
  objectName: string;
}

export interface IProductImage extends Document {
  productId: Types.ObjectId;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductImageSchema = new Schema<IProductImage>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
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

const ProductImage = model<IProductImage>("ProductImage", ProductImageSchema);
export default ProductImage;
