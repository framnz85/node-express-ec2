const express = require("express");

const app = express();

app.listen(8001, () => console.log("API running on port 5001"));

app.get("/", (req, res) => {
  res.json("My API running...");
});
