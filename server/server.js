const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());

//listen to the port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`The creator app is at ${port}`);
});
