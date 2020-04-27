var http = require("http");
var fs = require("fs");
var route = require("./routes");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    route(req, res);
  })
  .listen(5000);
