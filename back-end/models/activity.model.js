const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
