const express = require("express");
const listsRouter = express.Router();
const listController = require("../controllers/listController");

listsRouter.get("/view", listController.lists_view);
listsRouter.post("/view", listController.list_create_post);
listsRouter.get("/create", listController.list_create);
listsRouter.get("/edit/:id", listController.list_edit);
listsRouter.post("/edit/:id", listController.list_edit_post);
listsRouter.delete("/edit/:id", listController.list_edit_delete);

module.exports = listsRouter;