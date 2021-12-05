const router = require("express").Router();
const Activity = require("../models/activity.model");

router.get("/", (req, res) => {
  Activity.find()
    .select("username description -_id")
    .then((activities) => {
      res.status(200).send(activities);
    })
    .catch((err) => {
      res.status(400).send("Error: " + err);
    });
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = req.body.date;

  const newActivity = new Activity({
    username: username,
    description: description,
    date: date,
  });

  newActivity
    .save()
    .then((activity) => res.status(200).send(activity))
    .catch((err) => res.status(404).send("Error: " + err));
});

router.get("/:id", (req, res) => {
  Activity.findById(req.params.id)
    .then((activity) => res.status(200).send(activity))
    .catch((err) => res.status(404).send(err));
});

router.delete("/:id", (req, res) => {
  Activity.findByIdAndDelete(req.params.id)
    .then((activity) => res.status(200).send(activity))
    .catch((err) => res.status(404).send(err));
});

router.put("/:id", (req, res) => {
  Activity.findByIdAndUpdate(req.params.id, req.body.activity, { new: true })
    .then((ac) => {
      return ac ? res.status(200).send(ac) : res.status(404).send("Not found");
    })
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
