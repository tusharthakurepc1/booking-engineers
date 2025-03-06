const express = require("express");

const app = express();
const PORT = 5000;

// Internal API route
app.get("/", (req, res) => {
  console.log("In Backend Home Route>>>>>>>>>>>>>>")
  res.send('<h1> Hello From Express Server </h1>');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
