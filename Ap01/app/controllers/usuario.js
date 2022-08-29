// app/controllers/alunos.js
const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");

module.exports.getUsuarios = function (req, res) {
  let promise = Usuario.find();
  promise
    .then(function (usuarios) {
      res.json(usuarios);
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "banco não encontrado!", error: error });
    });
};

module.exports.postUsuario = function (req, res) {
  let usuario = {
    nick: req.body.nick,
    email: req.body.email,
    senha: bcrypt.hashSync(req.body.senha, 10),
  };
  let promisse = Usuario.create(usuario);

  promisse
    .then(function (usuario) {
      res
        .status(201)
        .json({ id: usuario._id, nick: usuario.nick, email: usuario.email });
    })
    .catch(function (error) {
      res.status(400).json({ mensagem: "usuario não inserido!", error: error });
    });
};
