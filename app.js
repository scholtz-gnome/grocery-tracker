const express = require("express");
const app = express();
const listsRouter = require("./routes/listsRouter.js");

app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log(" - - Listening for requests on port 3000 - - ");
});

// middleware & static files
app.use(express.static("public"));
app.use("/lists/", listsRouter);

// main routes
// HOME PAGE
app.get("/", (req, res) => {
  res.render("index", { title: "HOME" });
});

// ABOUT PAGE
app.get("/about", (req, res) => {
  res.render("about", { title: "ABOUT" });
});

// LISTS PAGE
app.get("/lists", (req, res) => {
  res.render("lists", { title: "LISTS" });
});

// USER PAGE
app.get("/user", (req, res) => {
  res.render("user", { title: "USER" });
});

// 404 PAGE
app.use((req, res) => {
  res.status(404).render("404", { title: "ERROR - 404" });
});