import { model, Schema } from "mongoose";

const MessageSchema = new Schema({
  message: {
    type: String,
    required: "message is required field",
  },
  // from: {
  //   avatarImage: { type: String, default: "" },
  //   email: { type: String },
  //   username: { type: String, required: "from.username is required field" },
  //   _id: { type: String, required: "from.id is required field" },
  // },
  // to: {
  //   avatarImage: { type: String, default: "" },
  //   email: { type: String },
  //   username: { type: String, required: "to.username is required field" },
  //   _id: { type: String, required: "to.id is required field" },
  // },
  senderId: {
    type: String,
    required: "messageId is required field",
  },
  users: Array,
});

export const MessageModel = model("messages", MessageSchema);
