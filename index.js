const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const { routes } = require("./routes/routes");

//files imports
const db = require("./db/db");
const { models } = require("./models");

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

//apis
app.use("/user", routes.Student);

//initializing database
db.sync()
  .then(() => {
    //listening
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
