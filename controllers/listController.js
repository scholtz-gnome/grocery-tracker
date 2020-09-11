const List = require("../models/list.js");

const lists_view = (req, res) => {
  List.find()
    .then(result => res.render("lists/view-lists.ejs", { title: "VIEW LISTS", result }))
    .catch(err => console.log(err));
}

const list_create = (req, res) => res.render("lists/create-list", { title: "CREATE LIST" });

const list_create_post = (req, res) => {
  const list = new List(req.body);
  list.save()
    .then(result => {
      res.redirect("/lists/view");
    })
    .catch(err => console.log(err));
}

const list_edit = (req, res) => {
  const id = req.params.id;
  const list = List.findById(id)
    .then(result => {
      res.render("lists/edit", { title: result.title, list: result });
    })
    .catch(err => console.log(err));
}

const list_edit_post = (req, res) => {
  List.findById(req.params.id)
    .then(result => {
      result.items.push(req.body.add)
      result.save()
        .then(result => {
          res.redirect(`/lists${req.url}`);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

const list_edit_delete = (req, res) => {
  const id = req.params.id;
  List.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: "/lists/view" });
    })
    .catch(err => console.log(err));
}

const list_edit_item_delete = (req, res) => {

  const id = req.params.id; //id of object
  const item = req.params.item; // string of item (eg. "Eggs")

  List.findById(id)
    .then(result => {
      const itemIndex = result.items.indexOf(item);
      const updatedItems = result.items.filter((element, i) => {
        return i !== itemIndex;
      });
      result.updateOne({ items: updatedItems })
        .then(result => res.json({ redirect: `/lists/edit/${id}` }))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

module.exports = {
  lists_view,
  list_create,
  list_create_post,
  list_edit,
  list_edit_post,
  list_edit_delete,
  list_edit_item_delete
}