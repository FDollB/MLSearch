var express = require('express');
var app = express();

var router = express.Router();
var request = require('request');

app.get('/api/items', function(req, res, next) {
  request({
    uri: 'https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q,
  }).pipe(res);
});

app.use('/', express.static(__dirname + '/app'));
app.get('/[^\.]+$', function(req, res){
    res.set('Content-Type', 'text/html')
        .sendfile(__dirname + '/app/index.html');
});

app.listen(8080);
console.log('Listening on port 8080...');