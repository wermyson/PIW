const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.logar = function (req, res) {
  Usuario.findOne({ email: req.body.email })
    .then(function (usuario) {
      if (bcrypt.compareSync(req.body.senha, usuario.senha)) {
        let token = jwt.sign(
          {
            id: usuario._id,
            nick: usuario.nick,
            email: usuario.email,
          },
          "senha"
        );
        res.status(200).json({ token: token });
      } else {
        res.status(401).send("credenciais incorretas");
      }
    })
    .catch(function (error) {
      res.status(401).send("credenciais incorretas");
    });
};

module.exports.checar = function (req, res, next) {
  let token = req.headers.token;
  jwt.verify(token, "senha", function (err, decoded) {
    if (err) {
      res.status(401).send("Token invalido");
    } else {
      next();
    }
  });
};

module.exports.decode = (token) => {
  return jwt.decode(token);
};
