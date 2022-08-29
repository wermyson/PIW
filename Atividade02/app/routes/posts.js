let controller = require("../controllers/posts.js");

module.exports = function (app) {
  app.get("/api/posts", controller.getPosts);
  app.get("/api/posts/:id", controller.getPostById);
  app.post("/api/posts", controller.postPost);
  app.delete("/api/posts/:id", controller.deletePost);
};
