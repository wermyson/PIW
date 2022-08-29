let usuarios = [
  { id: 1, nome: "João", email: "joazinho@gmail.com", senha: "1234" },
  { id: 2, nome: "Pedro", email: "pedrinho@gmail.com", senha: "4321" },
];

module.exports.getUsuarios = function (req, res) {
  res.json(usuarios);
};

module.exports.getUsuarioById = function (req, res) {
  var id = req.params.id;

  var usuario = usuarios.find((usuario) => usuario.id == id);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send("Usuario não encontrado");
  }
};

module.exports.postUsuario = function (req, res) {
  usuarios.push(req.body);
  res.status(200).send(req.body);
  console.log(req.body);
};

module.exports.deleteUsuario = function (req, res) {
  var id = req.params.id;

  var usuario = usuarios.find((usuario) => usuario.id == id);

  var positionUser = usuarios.indexOf(usuario);

  if (usuario) {
    res.status(200).send(usuarios.splice(positionUser, 1));
  } else {
    res.status(404).send("Usuario não encontrado");
  }
};
