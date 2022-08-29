const Mensagem = require("../models/mensagem");
const jwt = require("jsonwebtoken");
const auth = require("../controllers/auth");
const mensagem = require("../models/mensagem");

module.exports.postMensagem = function (req, res) {
  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_user_logado = payload.id;

  let mensagem = {
    remetente_id: id_user_logado,
    destinatario_id: req.body.destinatario_id,
    texto: req.body.texto,
  };
  let promisse = Mensagem.create(mensagem);

  promisse
    .then(function (mensagem) {
      res
        .status(201)
        .json({ id_mensagem: mensagem._id, mensagem: mensagem.texto });
    })
    .catch(function (error) {
      res.status(400).json({ mensagem: "mensagem não enviada!", error: error });
    });
};

module.exports.getMensagens = function (req, res) {
  let sender = req.params.sender;
  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_user_logado = payload.id;

  if (sender == true) {
    let promise = Mensagem.find({ remetente_id: id_user_logado });
    promise
      .then(function (mensagem) {
        res.status(200).json(mensagem);
      })
      .catch(function (error) {
        res
          .status(500)
          .json({ mensagem: "não conseguimos encontrar nada", error: error });
      });
  } else {
    let promise = Mensagem.find({ destinatario_id: id_user_logado });
    promise
      .then(function (mensagem) {
        res.status(200).json(mensagem);
      })
      .catch(function (error) {
        res
          .status(500)
          .json({ mensagem: "não conseguimos encontrar nada", error: error });
      });
  }
};

module.exports.deleteMensagem = function (req, res) {
  const payload = auth.decode(req.headers.token);

  Mensagem.findById(req.params.id)
    .exec()
    .then((mensagem) => {
      if (payload.id == mensagem.remetente_id) {
        Mensagem.findByIdAndDelete(req.params.id)
          .exec()
          .then((a) => res.status(200).json("Deleted"))
          .catch((e) => res.status(400).send(e));
      } else res.status(400).send("ação inválida, mensagem não deletado");
    })
    .catch((e) => res.status(404).send(e));
};
