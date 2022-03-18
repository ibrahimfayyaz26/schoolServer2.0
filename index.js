const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyparser = require("body-parser");

//files imports
const db = require("./db/db");

require("dotenv/config");

//initialize
const app = express();

//middleware
app.use(cors());
app.use("*", cors());
app.use(morgan("dev"));
app.use(bodyparser.json());

//.env
const port = process.env.PORT;

//main api
app.get("/main", (req, res) => {
  res.send("Danish school server");
});

//initializing database
db.sync()
  .then(() => {
    //listening
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
