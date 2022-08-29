let controller = require("../controllers/usuarios.js");

module.exports = function (app) {
  app.get("/usuarios", controller.getUsuarios);
  app.get("/usuarios/:id", controller.getUsuarioById);
  app.post("/usuarios", controller.postUsuario);
  app.delete("/usuarios/:id", controller.deleteUsuario);
};
