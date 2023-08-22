import mongoose from "mongoose";
import { mongoDbURl } from "../config/index.js";

mongoose
  .connect(mongoDbURl)
  .then(() => console.log("mongodb successfully connected"))
  .catch((err) => console.log(err, "mongoDb Error"));
