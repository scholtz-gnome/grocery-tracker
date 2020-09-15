const dashboard_get = (req, res) => {
  res.render("dashboard/dashboard", { title: "DASHBOARD" });
};

module.exports = {
  dashboard_get
}