const config = require("../config/auth.config");
const db = require("./../models");
const User = db.user;
const Logout = db.logout;

// const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    User.findOne({ name: req.body.username }, (err, role) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      var token = jwt.sign(
        { id: user.id, email: req.body.email, username: req.body.username },
        config.secret,
        {
          expiresIn: 86400, // 24 hours
        }
      );
      res.status(200).send({
        status: true,
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token,
      });
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res
          .status(200)
          .send({ status: false, message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(200).send({
          accessToken: null,
          message: "Invalid Password!",
          status: false,
        });
      }

      var token = jwt.sign(
        { id: user.id, username: user.username, email: user.email },
        config.secret,
        {
          expiresIn: 86400, // 24 hours
        }
      );

      var authorities = [];
      res.status(200).send({
        status: true,
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token,
      });
    });
};

exports.logout = (req, res) => {
  const logout_user = new Logout({
    accessToken: req.body.accessToken,
  });
  logout_user.save((err, doc) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({
      status: true,
      masssage: "logout",
      accessToken: null,
    });
  });
};