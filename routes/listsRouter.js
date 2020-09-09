const express = require("express");
const listsRouter = express.Router();
const List = require("../models/list.js");

listsRouter.get("/view", (req, res) => {
  res.render("view-lists", { title: "VIEW LISTS"});
  // List.find()
  //   .then(result => {
  //     res.render("view-lists", { title: "VIEW LISTS", result });
  //   })
  //   .catch(err => console.log(err));

});

listsRouter.get("/create", (req, res) => {
  res.render("create-list", { title: "CREATE LIST" });
  // const list = new List({
  //   title: "My Fourth Grocery List",
  //   items: ["Beans", "Dog Food", "Butter"]
  // });

  // list.save()
  //   .then(result => {
  //     res.render("create-list", { title: "CREATE LIST", result });
  //   })
  //   .catch(err => console.log(err));
  
});

module.exports = listsRouter;