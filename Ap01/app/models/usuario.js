var mongoose = require("mongoose");
module.exports = (function () {
  var schema = mongoose.Schema({
    nick: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
  });
  return mongoose.model("Usuario", schema);
})();
