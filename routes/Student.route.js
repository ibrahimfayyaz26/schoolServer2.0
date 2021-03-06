const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  toApprove,
  getAll,
  getUserData,
} = require("../controller/Student.controller");

//Sign up POST
router.post("/signup", (req, res) => {
  signUp(req, res);
});

//Sign in POST
router.post("/signin", (req, res) => {
  signIn(req, res);
});

//Approve PUT
router.put("/approve", (req, res) => {
  toApprove(req, res);
});

//Users GET
router.get("/", (req, res) => {
  getAll(req, res);
});

//Specific user GET
router.get("/:id", (req, res) => {
  getUserData(req, res);
});

//Specific user delete DELETE
router.delete("/:id", (req, res) => {
  this.delete(req, res);
});

module.exports = router;
