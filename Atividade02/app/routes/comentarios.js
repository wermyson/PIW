let controller = require("../controllers/comentario.js");

module.exports = function (app) {
  app.get("/api/comentarios", controller.getComentarios);
  app.get("/api/comentarios/:id", controller.getComentarioById);
  app.post("/api/comentarios", controller.postComentario);
  app.delete("/api/comentarios/:id", controller.deleteComentario);
};
