document.addEventListener('DOMContentLoaded', function() {
  $.ajax({
    dataType: 'json',
    url: '/api/breweries'
  }).success(function(data) {
    showInfo(data);
  });
});


function showInfo(data) {
  var breweries = new Breweries(data);
  var fillabilitySorted = breweries.sortByFillability();

  React.renderComponent(
    new BreweryList({breweries: breweries}),
    document.getElementById('bucket')
  );
}
