const Comentario = require("../models/comentario");
const comentarioView = require("../views/comentarios");
const auth = require("../controllers/auth");
const jwt = require("jsonwebtoken");

getComentarios = function (req, res) {
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

getComentarioById = function (req, res) {
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

postComentario = function (req, res) {
  let text = req.body.text;
  let id_post = req.body.id_post;
  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_user_logado = payload.id;
  let comentario = {
    text: text,
    id_post: id_post,
    id_usuario: id_user_logado,
  };

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

deleteComentario = function (req, res) {
  const payload = auth.decode(req.headers.token);

  Comentario.findById(req.params.id)
    .exec()
    .then((comentario) => {
      if (payload.id == comentario.id_usuario) {
        Comentario.findByIdAndDelete(req.params.id)
          .exec()
          .then((a) => res.status(200).json("Deleted"))
          .catch((e) => res.status(400).send(e));
      } else res.status(400).send("ação inválida, comentário não deletado");
    })
    .catch((e) => res.status(404).send(e));
};

module.export(
  this.getComentarios,
  this.getComentarioById,
  this.postComentario,
  this.deleteComentario
);
