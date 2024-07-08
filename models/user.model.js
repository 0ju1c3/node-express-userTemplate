import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
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
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

userSchema.methods.comparePassword = function (userPassword) {
  //not arrow functions do not have their own this context and inherit this from their surrounding scope, which in this case would not correctly refer to the user document (userSchema instance)
  return bcrypt.compare(userPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
