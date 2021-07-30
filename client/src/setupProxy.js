const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(proxy("/api/email", {
    target: "http://localhost:5000",
    secure: false
  }));
  app.use(proxy("/blogs", {
    target: "http://localhost:8000",
    secure: false
  }))
};