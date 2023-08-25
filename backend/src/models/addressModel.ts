import { Document, Schema, model, Types } from "mongoose";

export type AddressOwnerType = "user" | "supplier";

export interface IAddress extends Document {
  owner: Types.ObjectId;
  ownerType: AddressOwnerType;
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  createdAt: Date;
  updatedAt: Date;
}

const AddressSchema = new Schema<IAddress>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "ownerType",
    },
    ownerType: {
      type: String,
      required: true,
      enum: ["user", "supplier"],
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postalCode: {
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
  },
  {
    toJSON: {
      transform: (_doc: IAddress, ret: IAddress) => {
        return ret;
      },
    },
  }
);

const Address = model<IAddress>("Address", AddressSchema);
export default Address;
