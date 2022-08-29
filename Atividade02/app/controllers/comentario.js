const Comentario = require("../models/comentario");
const comentarioView = require("../views/comentarios");

module.exports.getComentarios = function (req, res) {
  let promisse = Comentario.find().exec();
  promisse
    .then(function (comentarios) {
      res.status(201).json(comentarioView.renderMany(comentarios));
    })
    .catch(function (error) {
      res
        .status(404)
        .json({ mensagem: "comentarios não encontrados!", error: error });
    });
};

module.exports.getComentarioById = function (req, res) {
  let id = req.params.id;
  let promise = Comentario.findById(id).exec();
  promise
    .then(function (comentario) {
      res.status(200).json(comentarioView.render(comentario));
    })
    .catch(function (error) {
      res.status(404).json({ mensagem: "não deu certo!", error: error });
    });
};

module.exports.postComentario = function (req, res) {
  let comentario = req.body;
  let promisse = Comentario.create(comentario);

  promisse
    .then(function (comentario) {
      res.status(201).json(comentarioView.render(comentario));
    })
    .catch(function (error) {
      res
        .status(404)
        .json({ mensagem: "comentario não inserido!", error: error });
    });
};

module.exports.deleteComentario = function (req, res) {
  let id = req.params.id;
  let promise = Comentario.findByIdAndDelete(id).exec();
  promise
    .then(function (comentario) {
      res.status(200).json(comentarioView.render(comentario));
    })
    .catch(function (error) {
      res
        .status(404)
        .json({ mensagem: "comentario não deletado!", error: error });
    });
};
