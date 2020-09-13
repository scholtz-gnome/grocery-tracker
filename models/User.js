const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an email."],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email address."]
  },
  password: {
    type: String,
    required: [true, "Please enter a password."],
    minlength: [6, "Miniminum password length is 6 characters."]
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;