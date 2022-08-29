let posts = [{ id: 1, texto: "Oi, tudo bom?", likes: 6 }];

module.exports.getPosts = function (req, res) {
  res.json(posts);
};

module.exports.getPostById = function (req, res) {
  var id = req.params.id;

  var post = posts.find((post) => post.id == id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post não encontrado");
  }
};

module.exports.postPost = function (req, res) {
  posts.push(req.body);
  res.status(200).send(req.body);
  console.log(req.body);
};

module.exports.deletePost = function (req, res) {
  var id = req.params.id;

  var post = posts.find((post) => post.id == id);

  var positionUser = posts.indexOf(post);

  if (post) {
    res.status(200).send(posts.splice(positionUser, 1));
  } else {
    res.status(404).send("Post não encontrado");
  }
};
