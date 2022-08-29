let controller = require("../controllers/usuarios.js");

module.exports = function (app) {
  app.get("/api/usuarios", controller.getUsuarios);
  app.get("/api/usuarios/:id", controller.getUsuarioById);
  app.post("/api/usuarios", controller.postUsuario);
  app.delete("/api/usuarios/:id", controller.deleteUsuario);
  app.get("/api/usuarios/:id/posts", controller.getPostsByUser);
  app.get("/api/usuarios/:id/comentarios", controller.getComentByUserId);
};