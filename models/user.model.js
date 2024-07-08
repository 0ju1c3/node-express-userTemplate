import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { model, Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "User" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
  tombstoned: { type: Boolean, default: false },
  tombstonedAt: { type: Date, default: null },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = (userPassword) => {
  return bcrypt.compare(userPassword, this.password);
};

const User = model("User", userSchema);
export default User;
