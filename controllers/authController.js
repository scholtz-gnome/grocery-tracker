const User = require("../models/User");

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

const signup_get = (req, res) => {
  res.render("auth/signup", { title: "SIGN UP" });
}

const signup_post = (req, res) => {
  const user = new User(req.body);

  user.save()
    .then(result => {
      res.status(201).json(user);
      // res.redirect("/lists/view");
    })
    .catch(err => {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    });
}

const login_get = (req, res) => {
  res.render("auth/login", { title: "LOGIN" });
}

const login_post = (req, res) => {
  res.save("posted to login");
}

module.exports = {
  signup_get,
  signup_post,
  login_get,
  login_post
}