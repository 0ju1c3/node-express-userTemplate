import mongoose from "mongoose";
const { model, Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  otp: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
  tombstoned: Boolean,
  tombstonedAt: Date.now(),
});

const user = model("User", userSchema);
export default user;
