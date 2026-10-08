const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const users = new Map(); // socket id -> user info

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("connected:", socket.id);
  socket.on("join", ({ name, room }) => {
    users.set(socket.id, { name, room });
    socket.join(room); // rooms
    socket.emit("system", `you joined ${room}`);
    socket.to(room).emit("system", `${name} joined`); // everyone in room except sender
  });

  socket.on("chat", (text) => {
    const u = users.get(socket.id);
    if (!u) return; // not joined yet
    io.to(u.room).emit("chat", { name: u.name, text }); // everyone in room including sender
  });

  socket.on("typing", () => {
    const u = users.get(socket.id);
    if (u) socket.to(u.room).emit("typing", u.name);
  });

  socket.on("disconnect", () => {
    const u = users.get(socket.id);
    if (u) io.to(u.room).emit("system", `${u.name} left`);
    users.delete(socket.id);
  });
});

server.listen(3000, () => console.log("open http://localhost:3000"));
