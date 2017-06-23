// var appInsights = require("applicationinsights");
// appInsights.setup("aad1d3b8-7695-40e9-953d-202f10a1ad7b").start();

var express = require('express');
var compress = require('compression');

var app = express();
var oneDay = 86400000; // miliseconds

const path = require('path')

// GZip compress static content
app.use(compress());

// Static file server on public
app.use(express.static(path.join(__dirname,'dist'), {
	maxAge: oneDay
}));

// Custom 404 handler
/*
app.use(function(req, res) {
    res.status(404);
    res.sendfile(__dirname + "/dist/404.html");
});
*/

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Fire it up!
app.listen(process.env.PORT || 8080);
