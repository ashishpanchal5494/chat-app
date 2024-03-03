import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./db/connectToMongoDB.js";
import { app } from "./socket/socket.js";
import { server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// server.get("/", (req, res) => {
//   // root route https://localhost:5000/
//   res.send("Hello World!!");
// });

server.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
