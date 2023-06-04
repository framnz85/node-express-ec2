const express = require("express");

const app = express();

app.listen(3001, () => console.log("API running on port 5001"));

app.get("/", (req, res) => {
  res.json("My API running...");
});
