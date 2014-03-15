document.addEventListener('DOMContentLoaded', function() {
  var URL = '0AnNkPDPOGoPFdDBvS2tOOWw1QVQ4OVhJQWxjYkNnTkE';
  Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } );
  // $.ajax({
  //   dataType: 'json',
  //   url: '/js/breweries_fixture.json',
  // }).success(function(data) {
  //   showInfo(data);
  // });
});


function showInfo(data) {
  var breweries = new Breweries(data);
  var fillabilitySorted = breweries.sortByFillability();

  React.renderComponent(
    new BreweryList({breweries: breweries}),
    document.getElementById('bucket')
  );
}
