var express = require('express');


module.exports = function(client) {
	var router = express.Router();
	router.get("/books", function(req, res) {
		client.query("SELECT id, title FROM books", function(err, result) {
			if (err) throw err;
			res.send(result.rows);
		});
		
	});
	router.get("/books/:id", function(req, res) {
		var bookID = req.params["id"] || 1;
		client.query("SELECT id, title FROM books WHERE id = $1",[bookID], function(err, result) {
			if (err) throw err;
			res.send(result.rows);
		});
	})
	return router;
}


