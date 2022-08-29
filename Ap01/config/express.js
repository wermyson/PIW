let express = require("express");
let routes_usuario = require("../app/routes/usuario");
let routes_mensagem = require("../app/routes/mensagem");

function setup() {
  let app = express();
  app.set("port", 3000);
  app.use(express.static("./public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  routes_usuario(app);
  routes_mensagem(app);
  return app;
}

module.exports.setup = setup;
