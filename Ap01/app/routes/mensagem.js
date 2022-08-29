let controller = require("../controllers/mensagem.js");
let controllerAuth = require("../controllers/auth");

module.exports = function (app) {
  app.use("/api/mensagem", controllerAuth.checar);
  app.post("/api/mensagem", controller.postMensagem);
  app.delete("/api/mensagem/:id", controller.deleteMensagem);
  app.get("/api/mensagens/:sender", controller.getMensagens);
};
