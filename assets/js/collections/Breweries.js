var Breweries = Backbone.Collection.extend({
  model: Brewery,

  sortByFillability: function(order) {
    var desc = (order && order.toUpperCase() === 'DESC');
    var models = this.models.sort(function(a, b) {
      var fillComparison = (desc ? a.fillability() - b.fillability() : b.fillability() - a.fillability());
      return (fillComparison !== 0 ? fillComparison : a.get('brewery').localeCompare(b.get('brewery')));
    });

    return new Breweries(models);
  },

  sortByName: function(order) {
    var desc = (order && order.toUpperCase() === 'DESC');
    var models = this.models.sort(function(a, b) {
      return a.get('brewery').localeCompare(b.get('brewery'));
    });

    return new Breweries(models);
  },

  breweriesWithName: function(name) {
    var normalizedName = name.toLowerCase();
    var models = this.select(function (model) {
      return model.get('brewery').toLowerCase().indexOf(name) > -1;
    });

    return new Breweries(models);
  }

});
