const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  age: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
