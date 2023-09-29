const express = require("express");
const path = require("path");
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3030;

app.use(cors());

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
