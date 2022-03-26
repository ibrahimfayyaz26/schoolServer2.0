const express = require("express");
const router = express.Router();
const { signUp } = require("../controller/Student.controller");

//Sign up POST
router.post("/signup", (req, res) => {
  signUp(req, res);
});

module.exports = router;
