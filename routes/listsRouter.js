const express = require("express");
const listsRouter = express.Router();

listsRouter.get("/view", (req, res) => {
  res.render("view-lists", { title: "VIEW LISTS" });
});

listsRouter.get("/create", (req, res) => {
  res.render("create-list", { title: "CREATE LIST" });
});

module.exports = listsRouter;