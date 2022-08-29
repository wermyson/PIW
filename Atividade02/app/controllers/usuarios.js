// const { exec } = require("child_process");
const Usuario = require("../models/usuario");
const Comentario = require("../models/comentario");
const Post = require("../models/post");

const usuarioView = require("../views/usuarios");
const postView = require("../views/posts");
const comentarioView = require("../views/comentarios");

module.exports.getUsuarios = function (req, res) {
  let promisse = Usuario.find().exec();
  promisse
    .then(function (usuarios) {
      res.status(201).json(usuarioView.renderMany(usuarios));
    })
    .catch(function (error) {
      res
        .status(400)
        .json({ mensagem: "alunos não encontrados!", error: error });
    });
};

module.exports.getUsuarioById = function (req, res) {
  let id = req.params.id;
  let promise = Usuario.findById(id).exec();
  promise
    .then(function (usuario) {
      res.status(200).json(usuarioView.render(usuario));
    })
    .catch(function (error) {
      res.status(404).json({ mensagem: "não deu certo!", error: error });
    });
};

module.exports.postUsuario = function (req, res) {
  let usuario = req.body;
  let promisse = Usuario.create(usuario);

  // chamada qunado a requisição é concluida
  // recebe o aluno inserido como parametro
  promisse
    .then(function (usuario) {
      res.status(201).json(usuarioView.render(usuario));
    })
    .catch(function (error) {
      res.status(400).json({ mensagem: "aluno não inserido!", error: error });
    });
};

module.exports.deleteUsuario = function (req, res) {
  let id = req.params.id;
  let promise = Usuario.findByIdAndDelete(id).exec();
  promise
    .then(function (usuario) {
      res.status(200).json(usuarioView.render(usuario));
    })
    .catch(function (error) {
      res.status(404).json({ mensagem: "post não deletado!", error: error });
    });
};

// não deu certo :(
module.exports.getComentByUserId = function (req, res) {
  let id = req.params.id;
  let promise = Comentario.find({ id_usuario: id });
  promise
    .then(function (comentarios) {
      res.status(200).json(comentarioView.renderMany(comentarios));
    })
    .catch(function (error) {
      res
        .status(500)
        .json({ mensagem: "não foram encontrados comentarios", error: error });
    });
};

// não consegui fazer essa parte
module.exports.getPostsByUser = function (req, res) {
  let id = req.params.id;
  let promise = Post.find({ id_usuario: id });
  promise
    .then(function (posts) {
      res.status(200).json(postView.renderMany(posts));
    })
    .catch(function (error) {
      res
        .status(500)
        .json({ mensagem: "não conseguimos encontrar nada", error: error });
    });
};
