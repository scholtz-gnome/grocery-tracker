const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listRouter = require("./routes/listRouter");
const authRouter = require("./routes/authRouter");

// connect to DB 
const dbURI = "mongodb+srv://olivia-scholtz:olivia-scholtz-password@node-tutorial.scb5o.mongodb.net/grocery-tracker?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(result => {
    app.listen(3000, () => console.log("app.js: - - Listening for requests on port 3000 - - "));
    console.log("app.js: - - Connected to the Database - - ");
  })
  .catch(err => console.log(err));

app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/lists/", listRouter);
app.use(express.json());
app.use(authRouter);

// main routes
// HOME PAGE
app.get("/", (req, res) => res.render("index", { title: "HOME" }));

// ABOUT PAGE
app.get("/about", (req, res) => res.render("about", { title: "ABOUT" }));

// LISTS PAGE
app.get("/lists", (req, res) => res.render("lists/lists", { title: "LISTS" }));

// 404 PAGE
app.use((req, res) => res.status(404).render("404", { title: "ERROR - 404" }));