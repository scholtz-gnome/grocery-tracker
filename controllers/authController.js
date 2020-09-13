const User = require("../models/User");

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
      console.log(err);
      res.status(400).send("error, user not created");
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