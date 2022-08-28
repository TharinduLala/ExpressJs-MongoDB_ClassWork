const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const usersRouter = require("./routes/UsersRoute");
app.use("/user", usersRouter);

const postsRouter = require("./routes/PostsRoute");
app.use("/post", postsRouter);

const url = "mongodb://127.0.0.1/facebookCloneApp";
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected to db...");
});

app.listen(9000, () => {
  console.log("Server Started...");
});
