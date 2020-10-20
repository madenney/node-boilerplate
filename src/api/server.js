require("dotenv").config();
const express = require("express");
const http = require("http");
const next = require("next");
const thoughtsAPI = require("./thoughts");
const authAPI = require("./auth");


const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  dir: "."
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(thoughtsAPI);
  server.use(authAPI);

  // handling everything else with Next.js
  server.get("*", handle);

  http.createServer(server).listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});