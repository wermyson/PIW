var mongoose = require("mongoose");
module.exports = (function () {
  var schema = mongoose.Schema({
    remetente_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Usuario",
      required: true,
    },
    destinatario_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Usuario",
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
  });
  return mongoose.model("Mensagem", schema);
})();
