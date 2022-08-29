let controller = require("../controllers/posts.js");
let controllerAuth = require("../controllers/auth");

module.exports = function (app) {
  app.get("/api/posts", controller.getPosts);
  app.use("/api/posts", controllerAuth.checar);
  app.post("/api/posts", controller.postPost);
  app.delete("/api/posts/:id", controller.deletePost);
  app.get("/api/posts/:id", controller.getPostById);
  app.get("/api/posts/:id/comentarios", controller.getComentByPostId);
};
