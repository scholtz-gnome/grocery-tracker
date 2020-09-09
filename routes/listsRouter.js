const express = require("express");
const listsRouter = express.Router();
const List = require("../models/list.js");

listsRouter.get("/view", (req, res) => {
  List.find()
    .then(result => res.render("view-lists", { title: "VIEW LISTS", result }))
    .catch(err => console.log(err));
});

listsRouter.get("/create", (req, res) => {
  res.render("create-list", { title: "CREATE LIST" });
});

listsRouter.post("/view", (req, res) => {
  const list = new List(req.body);
  list.save()
    .then(result => {
      res.redirect("/lists/view");
    })
    .catch(err => console.log(err));
});

listsRouter.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const list = List.findById(id)
    .then(result => {
      res.render("edit", { title: result.title, list: result });
    })
    .catch(err => console.log(err));
});

listsRouter.post("/edit/:id", (req, res) => {
  List.findById(req.params.id)
    .then(result => {
      result.items.push(req.body.add)
      result.save()
        .then(result => {
          res.redirect(`/lists/${req.url}`);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = listsRouter;