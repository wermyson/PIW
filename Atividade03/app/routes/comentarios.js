let controller = require("../controllers/comentario.js");
let controllerAuth = require("../controllers/auth");

module.exports = function (app) {
  app.get("/api/comentarios", controller.getComentarios);
  app.use("/api/comentarios", controllerAuth.checar);
  app.post("/api/comentarios", controller.postComentario);
  app.delete("/api/comentarios/:id", controller.deleteComentario);
  app.get("/api/comentarios/:id", controller.getComentarioById);
};
