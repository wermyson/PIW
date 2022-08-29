let controller = require("../controllers/usuarios");
let controllerAuth = require("../controllers/auth");

module.exports = function (app) {
  app.post("/api/usuarios/signin", controllerAuth.logar);
  app.post("/api/usuarios", controller.postUsuario);  
  app.use("/api/usuarios", controllerAuth.checar);
  app.delete("/api/usuarios/:id", controller.deleteUsuario);
  app.get("/api/usuarios", controller.getUsuarios);
  app.get("/api/usuarios/:id", controller.getUsuarioById);
  app.get("/api/usuarios/:id/posts", controller.getPostsByUser);
  app.get("/api/usuarios/:id/comentarios", controller.getComentByUserId);
};
