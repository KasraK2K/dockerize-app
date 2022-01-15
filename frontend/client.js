const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", function (req, res) {
  return res.sendFile(__dirname + "/index.html");
});

app.listen(8080, console.log("Frontend is running on port 8080"));
