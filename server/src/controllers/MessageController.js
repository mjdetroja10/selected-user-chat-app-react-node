import { MessageModel } from "../models/MessageModel.js";

export const getAllMessages = async (req, res) => {
  try {
    const { from, to } = req.body;

    const messages = await MessageModel.find({
      users: { $all: [from, to] },
    });

    res.send({ data: messages, message: "successfullly get all msgss" });
  } catch (error) {
    res.status(500, {
      errors: { message: error?.message || "internal error" },
    });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const messages = await MessageModel.create(req.body);
    console.log(messages, "mmmmmmmmmmmmmm***");

    res.send({ data: messages, message: "msg sent successfullly" });
  } catch (error) {
    res.status(500, {
      errors: { message: error?.message || "internal error" },
    });
  }
};
