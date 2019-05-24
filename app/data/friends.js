// Dependencies
var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;
  switch (path) {
    case "/thanks":
      return renderThankYouPage(req, res);
    default:
      return renderWelcomePage(req, res);
    }
  }