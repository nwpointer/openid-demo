const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5044, () => {
  console.log("Running on port 5044.");
});

// Export the Express API
module.exports = app;
