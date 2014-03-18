var Tabletop = require('tabletop');
var fs = require('fs');

var getGoogleData = function(sheetKey, fixture, cb) {
  if (1==1) {
    fs.readFile('./public/js/breweries_fixture.json', 'utf8', function(err, data) {
      if (err) throw err;
      cb(JSON.parse(data));
    });
  } else {
    Tabletop.init({key: sheetKey, callback: cb, simpleSheet: true});
  }
};

module.exports = {
  breweries: function(req, res, next) {
    var sheetKey = '0AnNkPDPOGoPFdDBvS2tOOWw1QVQ4OVhJQWxjYkNnTkE';
    getGoogleData(sheetKey, req.query.fixture, function(data) {
      res.json(data);
    });
  }
};
