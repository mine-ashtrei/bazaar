import mongoose, { Document, Schema } from "mongoose";

interface IEmail extends Document {
  email: string;
}

const emailSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Email = mongoose.model<IEmail>("Email", emailSchema);

export default Email;
