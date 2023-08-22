import {
  getAllMessages,
  sendMessage,
} from "../controllers/MessageController.js";

import {
  LoginRequest,
  RegisterRequest,
  getAllusers,
} from "../controllers/UserController.js";
import { AuthMiddleware } from "../middlewares/AuthMiddleware.js";
import { upload } from "../middlewares/MulterMiddleware.js";

export const appRouters = (app) => {
  app.post("/auth/register", upload.single("avatarImage"), RegisterRequest);
  app.post("/auth/login", LoginRequest);

  app.get("/auth/get-all-users/:id", AuthMiddleware, getAllusers);
  app.post("/api/get-msgs", AuthMiddleware, getAllMessages);
  app.post("/api/send-msg", AuthMiddleware, sendMessage);
};
