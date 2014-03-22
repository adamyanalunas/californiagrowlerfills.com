var listFilter = Backbone.View.extend({
  events: {
    'keyup': 'updateFilter'
  },

  initialize: function() {
    _.bindAll(this, 'updateFilter');
  },

  updateFilter: function(e) {
    var filteredCollection = this.collection.breweriesWithName(e.target.value);
    postal.publish({
      channel: 'list',
      topic: 'filtered.name',
      data: filteredCollection
    });
    return filteredCollection;
  }
});
