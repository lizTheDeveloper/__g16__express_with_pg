var express = require('express');
var pg = require('pg');

var app = express();



var client = new pg.Client(process.env["DATABASE_URL"]);

client.connect();

var booksRouter = require("./books")(client);

app.use("/", booksRouter);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});