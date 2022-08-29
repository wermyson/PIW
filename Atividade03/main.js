const http = require("http");
const app = require("./config/express")();
const db = require("./config/db");

http.createServer(app).listen(app.get("port"), function () {
  console.log("Servidor execultando na porta " + app.get("port"));
});

db("mongodb://localhost/sistemaRedeSocial");