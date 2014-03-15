document.addEventListener('DOMContentLoaded', function() {
  // var URL = '0AnNkPDPOGoPFdDBvS2tOOWw1QVQ4OVhJQWxjYkNnTkE';
  // Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } );
  $.ajax({
    dataType: 'json',
    url: '/js/breweries_fixture.json',
  }).success(function(data) {
    showInfo(data);
  });
});


function showInfo(data) {
  var directives = {
    brewery: {
      html: function() {
        var name = (this.get('breweryurl'))
          ? '<a href="' + this.get('breweryurl') + '">' + this.get('brewery') + '</a>'
          : this.get('brewery');
        var fillInfo = (this.get('fillurl'))
          ? '<br><small><a href="' + this.get('fillurl') + '">Growler information</a></small>'
          : '';

        return name + fillInfo;
      }
    },
    score: {
      html: function() {
        return 'score: ' + this.fillability();
      }
    }
  }

  var breweries = new Breweries(data);
  var fillabilitySorted = breweries.sortByFillability();
  // $('.breweries').render(fillabilitySorted, directives);

  var model = breweries.models[0];
  var breweryRow = new BreweryView({model: model});
  breweryRow.render();
}
