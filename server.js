import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import usersRoute from "./routes/api/users.js";
import authRoute from "./routes/api/auth.js";
import postsRoute from "./routes/api/posts.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER STARTED ON PORT ${PORT}`);
});

// Connect Database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("MONGODB CONNECTED");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// app.use(express.static(path.join(__dirname, "./client/out")));

app.use(express.static("build"));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// app.use(express.static("./client/.next"));
// app.get("/*", (_, res) => {
//   res.sendFile(path.join(__dirname, "./client/"));
// });
