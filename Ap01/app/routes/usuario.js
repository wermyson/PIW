let controller = require("../controllers/usuario.js");
let controllerAuth = require("../controllers/auth");

module.exports = function (app) {
  app.post("/api/usuarios/signin", controllerAuth.logar);
  app.post("/api/usuarios", controller.postUsuario);
  app.use("/api/usuarios", controllerAuth.checar);
  app.get("/api/usuarios", controller.getUsuarios);
};
