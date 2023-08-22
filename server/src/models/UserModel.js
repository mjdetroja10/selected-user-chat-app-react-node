import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: "username is required field",
    unique: true,
    min: 4,
    max: 64,
  },
  email: {
    type: String,
    required: "email is required field",
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: "password is required field",
    min: 8,
  },
  isAvatarImageSet: {
    type: Boolean,
    required: true,
    default: false,
  },
  avatarImage: {
    data: Buffer,
    contentType: String,
  },
});

export const UserModel = model("users", userSchema);
