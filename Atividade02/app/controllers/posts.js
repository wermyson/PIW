const Post = require("../models/post");
const postView = require("../views/posts");

let posts = [{ id: 1, texto: "Oi, tudo bom?", likes: 6 }];

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
  let post = req.body;
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
  let id = req.params.id;
  let promise = Post.findByIdAndDelete(id).exec();
  promise
    .then(function (post) {
      res.status(200).json(postView.render(post));
    })
    .catch(function (error) {
      res.status(404).json({ mensagem: "post não deletado!", error: error });
    });
};
