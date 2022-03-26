const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  getAll,
  getUserData,
} = require("../controller/Admin.controller");

//Sign up POST
router.post("/signup", (req, res) => {
  signUp(req, res);
});

//Sign in POST
router.post("/signin", (req, res) => {
  signIn(req, res);
});

//Admin users GET
router.get("/", (req, res) => {
  getAll(req, res);
});

//Specific admin user GET
router.get("/:id", (req, res) => {
  getUserData(req, res);
});

//Specific admin user delete DELETE
router.delete("/:id", (req, res) => {
  this.delete(req, res);
});

module.exports = router;
