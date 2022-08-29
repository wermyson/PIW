const jwt = require("jsonwebtoken");
const auth = require("../controllers/auth");

const Post = require("../models/post");
const Comentario = require("../models/comentario");

const postView = require("../views/posts");
const comentarioView = require("../views/comentarios");

// let posts = [{ id: 1, texto: "Oi, tudo bom?", likes: 6 }];

module.exports.getPosts = function (req, res) {
  let promisse = Post.find().exec();
  promisse
    .then(function (posts) {
      res.status(201).json(postView.renderMany(posts));
    })
    .catch(function (error) {
      res
        .status(400)
        .json({ mensagem: "posts não encontrados!", error: error });
    });
};

module.exports.getPostById = function (req, res) {
  let id = req.params.id;
  let promise = Post.findById(id).exec();
  promise
    .then(function (post) {
      res.status(200).json(postView.render(post));
    })
    .catch(function (error) {
      res.status(404).json({ mensagem: "não deu certo!", error: error });
    });
};

module.exports.postPost = function (req, res) {
  let text = req.body.text;
  let likes = req.body.likes;
  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_user_logado = payload.id;
  let post = {
    text: text,
    likes: likes,
    id_usuario: id_user_logado,
  };

  let promisse = Post.create(post);

  promisse
    .then(function (post) {
      res.status(201).json(postView.render(post));
    })
    .catch(function (error) {
      res.status(400).json({ mensagem: "post não inserido!", error: error });
    });
};

module.exports.deletePost = function (req, res) {
  const payload = auth.decode(req.headers.token);

  Post.findById(req.params.id)
    .exec()
    .then((post) => {
      if (payload.id == post.id_usuario) {
        Post.findByIdAndDelete(req.params.id)
          .exec()
          .then((a) => res.status(200).json("Deleted"))
          .catch((e) => res.status(400).send(e));
      } else res.status(400).send("ação inválida, post não deletado");
    })
    .catch((e) => res.status(404).send(e));
};

module.exports.getComentByPostId = function (req, res) {
  let id = req.params.id;
  let promise = Comentario.find({ id_post: id });
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
