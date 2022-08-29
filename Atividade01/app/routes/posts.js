let controller = require("../controllers/posts.js");

module.exports = function (app) {
  app.get("/posts", controller.getPosts);
  app.get("/posts/:id", controller.getPostById);
  app.post("/posts", controller.postPost);
  app.delete("/posts/:id", controller.deletePost);
};
