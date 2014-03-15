var Breweries = Backbone.Collection.extend({
  model: Brewery,

  sortByFillability: function(order) {
    var desc = (order && order.toUpperCase() === 'DESC');
    return this.models.sort(function(a, b) {
      var fillComparison = (desc ? a.fillability() - b.fillability() : b.fillability() - a.fillability());
      return (fillComparison !== 0 ? fillComparison : a.get('brewery').localeCompare(b.get('brewery')));
    });
  }

});
