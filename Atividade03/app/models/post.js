const mongoose = require("mongoose");

module.exports = (function () {
  let schema = mongoose.Schema({
    text: {
      type: "String",
      require: true,
    },
    likes: {
      type: "String",
      require: true,
    },
    id_usuario: {
      type: mongoose.Schema.ObjectId,
      ref: "Usuario",
    },
  });

  return mongoose.model("Post", schema);
})();
