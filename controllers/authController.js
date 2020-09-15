const User = require("../models/User");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // duplicate error code
  if (err.code === 11000) {
    errors.email = "That email already exists.";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    })
  }

  return errors;
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "grocery-tracker-secret", {
    expiresIn: maxAge
  });
}

const signup_post = (req, res) => {
  const user = new User(req.body);

  user.save()
    .then(result => {
      const token = createToken(result._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000});
      res.status(201).json({ user: user._id });
    })
    .catch(err => {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    });
}

const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    res.status(200).json({ user: user._id });
  }
  catch (err) {
    res.status(400).json({});
  }
}

module.exports = {
  signup_post,
  login_post
}