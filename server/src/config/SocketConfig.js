export const SocketConfig = (io) => {
  global.onlineUsers = new Map();
  io.on("connection", (socket) => {
    // global.chatSocket = socket;
    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
    });

    socket.on("send-message", (data) => {
      const sendUserSocket = onlineUsers.get(data.to._id);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("receive-message", data);
      }
    });
  });
};
