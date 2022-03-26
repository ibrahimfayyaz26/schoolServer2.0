const { models } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Sign up POST request
exports.signUp = async (req, res) => {
  const cond = await models.Admin.findOne({
    where: { email: req.body.email },
  });
  if (!cond) {
    models.Admin.create({
      name: req.body.name,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),

      phone: req.body.phone,
    })
      .then((data) => {
        let token = jwt.sign(
          {
            id: data.email,
          },
          process.env.SECRET,
          {
            expiresIn: "1w",
          }
        );
        if (data) {
          res.send({
            status: true,
            data: {
              id: data.key,
              name: data.name,
              email: data.email,
              phone: data.phone,
              admin: data.admin,
            },
            token,
          });
        } else {
          res.send({
            status: false,
            data: null,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.send({
          status: false,
          data: null,
        });
      });
  } else {
    res.send({
      status: false,
      data: null,
      msg: "Admin user already exits",
    });
  }
};

//Sign in POST request
exports.signIn = (req, res) => {
  models.Admin.findOne({
    where: { email: req.body.email },
  })
    .then((data) => {
      if (data) {
        if (bcryptjs.compareSync(req.body.password, data.password)) {
          let token = jwt.sign(
            {
              id: data.email,
            },
            process.env.SECRET,
            {
              expiresIn: "1w",
            }
          );
          res.send({
            status: true,
            data: {
              id: data.key,
              name: data.name,
              email: data.email,
              phone: data.phone,
              admin: data.admin,
            },
            token,
          });
        } else {
          res.send({
            status: false,
            data: null,
            msg: "wrong password",
          });
        }
      } else {
        res.send({
          status: false,
          data: null,
          msg: "Admin user not found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: false,
        data: null,
      });
    });
};

//To get all Admin users data GET request
exports.getAll = (req, res) => {
  models.Admin.findAll()
    .then((data) => {
      if (data) {
        res.send({
          status: true,
          data: data,
        });
      } else {
        res.send({
          status: false,
          data: null,
        });
      }
    })
    .catch((err) => {
      res.send({
        status: false,
        data: null,
      });
    });
};

//To get specific Admin user data GET request
exports.getUserData = (req, res) => {
  models.Admin.findByPk(req.params.id)
    .then((data) => {
      if (data) {
        res.send({
          status: true,
          data: data,
        });
      } else {
        res.send({
          status: false,
          data: null,
        });
      }
    })
    .catch((err) => {
      res.send({
        status: false,
        data: null,
      });
    });
};

//To delete specific Admin user data DELETE request
exports.delete = (req, res) => {
  models.Admin.findByPk(req.params.id)
    .then((data) => {
      if (data) {
        data.destroy();
        res.send({
          status: true,
          msg: "Deleted",
        });
      } else {
        res.send({
          status: false,
          msg: "Admin user not found",
        });
      }
    })
    .catch((error) => {
      res.send({
        status: false,
        data: null,
      });
    });
};

//To update specific user data PUT request
exports.update = (req, res) => {};
