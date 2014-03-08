var express = require('express');
var app = express();


app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(require('connect-assets')());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));

  app.use(app.router);
});


app.get('/', function(req, res) {
  res.render('index', {pageData: {year: (new Date).getFullYear()}});
});

var server = app.listen(80, function() {
    console.log('Listening on port %d', server.address().port);
});
