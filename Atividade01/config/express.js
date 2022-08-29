// Importando módulo express (Padrão CommonJS)
let express = require("express");
var routesUsuarios = require("../app/routes/usuarios.js");
var routesPosts = require("../app/routes/posts.js");

module.exports = function () {
  let app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.set("port", 3000);
  app.use(express.static("./"));
  routesUsuarios(app);
  routesPosts(app);
  return app;
};
