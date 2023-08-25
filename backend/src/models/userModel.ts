import { Document, Schema, Types, model } from "mongoose";

export type RetailerRole = "retailer";
export type WorkshopRole = "workshop";
export type RootRole = "root";
export type UserRole = RetailerRole | WorkshopRole | RootRole;

export interface IUser extends Document {
  email: string;
  password?: string;
  fullName?: string;
  role: RetailerRole | WorkshopRole;
  workshopId?: Types.ObjectId;
  googleId?: string;
  facebookId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: function () {
        return !(this.googleId || this.facebookId);
      },
    },
    fullName: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["retailer", "workshop", "root"], //workshop -> supplier; 
      default: "retailer",
      required: true,
    },
    workshopId: {
      type: Schema.Types.ObjectId,
      default: null,
      ref: "Workshop",
      required: false,
    },
    googleId: {
      type: String,
      required: false,
      unique: true,
      sparse: true,
    },
    facebookId: {
      type: String,
      required: false,
      unique: true,
      sparse: true,
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
      transform: (_doc: IUser, ret: IUser) => {
        delete ret.password;
        return ret;
      },
    },
  }
);

const User = model<IUser>("User", UserSchema);
export default User;
