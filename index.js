require("dotenv").config();

const http = require("http");
const path = require("path");
const express = require("express");
const cors = require("cors");
const tokenGenerator = require("./token_generator");

const app = express();

app.use(express.static(path.join(__dirname, "public")), cors());

app.get("/", function (request, response) {
  const identity = request.query.identity || "identity";
  const room = request.query.room;
  response.send(tokenGenerator(identity, room));
});

const server = http.createServer(app);
const port = process.env.PORT;
server.listen(port, function () {
  console.log("Express server running on *:" + port);
});
