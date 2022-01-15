const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post("/", function (req, res) {
  const list = [
    { no: 1, name: "Alex", age: 20 },
    { no: 2, name: "Bob", age: 30 },
    { no: 3, name: "Cindy", age: 40 },
  ];

  return res.json(list);
});

app.listen(3000, console.log("Backend is running on port 3000"));
