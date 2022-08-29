const http = require("http");
const app = require("./config/express.js")();
http.createServer(app).listen(app.get("port"), function () {
  console.log("Servidor execultando na porta " + app.get("port"));
});
