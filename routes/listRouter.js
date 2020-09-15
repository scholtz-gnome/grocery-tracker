const express = require("express");
const listRouter = express.Router();
const listController = require("../controllers/listController");
const { requireAuth } = require("../middleware/authMiddleware");

listRouter.get("/view", requireAuth, listController.lists_view);
listRouter.post("/view", requireAuth, listController.list_create_post);
listRouter.get("/create", requireAuth, listController.list_create);
listRouter.get("/edit/:id", listController.list_edit);
listRouter.post("/edit/:id", listController.list_edit_post);
listRouter.delete("/edit/:id", listController.list_edit_delete);
listRouter.delete("/edit-item/:id/:item", listController.list_edit_item_delete);

module.exports = listRouter;