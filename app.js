const express = require("express");
const app = express();
// set the template view engine
app.set("view engine", "ejs");
// app.set(express.static("public"));

app.listen(3000, () => {
  console.log(" - - Listening for requests on port 3000 - - ");
});

// static files
app.use(express.static("public"));

//routes
// HOME PAGE
app.get("/", (req, res) => {
  res.render("index", { title: "HOME" });
});

// ABOUT PAGE
app.get("/about", (req, res) => {
  res.render("about", { title: "ABOUT" });
});

// USER PAGE
app.get("/user", (req, res) => {
  res.render("user", { title: "USER" });
});

// 404 PAGE
app.use((req, res) => {
  res.status(404).render("404", { title: "ERROR - 404" });
});