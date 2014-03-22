document.addEventListener('DOMContentLoaded', function() {
  $.ajax({
    dataType: 'json',
    url: '/api/breweries'
  }).success(function(data) {
    setup(data);
  });
});


function setup(data) {
  var breweries = new Breweries(data);
  var fillabilitySorted = breweries.sortByFillability();

  renderList(fillabilitySorted);
  var filter = new listFilter({el: '#fullTableFilter', collection: fillabilitySorted});

  postal.subscribe({
    channel: 'list',
    topic: 'filtered.name',
    callback: function(data, envelope) {
      console.log(data);
      renderList(data);
    }
  });
}

var renderList = function(breweries) {
  React.renderComponent(
    new BreweryList({breweries: breweries}),
    document.getElementById('bucket')
  );
};
