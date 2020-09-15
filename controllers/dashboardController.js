const List = require("../models/list.js");
const User = require("../models/User");

const dashboard_get = (req, res) => res.render("dashboard/dashboard", { title: "DASHBOARD" });

module.exports = {
  dashboard_get
}