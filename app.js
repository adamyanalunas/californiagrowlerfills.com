var express = require('express');
var app = express();
var api_routes = require('./routes/api_routes');
var rest = require('rest');

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(require('connect-assets')());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compress());
  app.use(express.static(__dirname + '/public'));

  app.use(app.router);
});


app.get('/', function(req, res) {
  res.render('index', {pageData: {year: (new Date()).getFullYear()}});
});

app.get('/api/breweries', api_routes.breweries);

var port = Number(process.env.PORT || 3000);
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
