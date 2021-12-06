const router = require("express").Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(400).send("Error: " + err);
    });
});

router.post("/", (req, res) => {
  const user = new User({
    username: req.body.username,
  });

  user
    .save()
    .then((user) => res.status(200).send(user))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
