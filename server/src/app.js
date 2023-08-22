import express from "express";
import http from "http";
import { Server } from "socket.io";
import { port } from "./config/index.js";
import cors from "cors";
import { SocketConfig } from "./config/SocketConfig.js";
import "./config/MongoConfig.js";
import { appRouters } from "./Routers/appRouters.js";

const app = express();
const server = http.createServer(app);

app.use(express.json());

// this is for resolve cors error using cors module
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
// this is for resolve cors error using cors module  --- ends

try {
  appRouters(app);
} catch (error) {
  console.log(error);
}

// socket configuration
try {
  SocketConfig(io);
} catch (error) {
  console.log(error);
}
// socket configuration  --- ends

//  server run on given port
server.listen(port, (err) => {
  if (err) console.log(err, "error");
  console.log("server is running on port: " + port);
});
//  server run on given port --- ends
