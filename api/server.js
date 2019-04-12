const express = require("express");

const hobbits = require("../hobbits/hobbitsModel.js");
const postRouter = require("../routers/postRouter.js");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/hobbits", async (req, res) => {
  const rows = await hobbits.getAll();

  res.status(200).json(rows);
});

server.use("/api/posts", postRouter);

module.exports = server;
