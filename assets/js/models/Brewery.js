var Brewery = Backbone.Model.extend({
  fillability: function() {
    var score = 1;

    if (this.fillsBlanks())
      score = score << 1;

    if (this.fillsOtherBreweries())
      score = score << 1;

    if (this.fillsOneLiters())
      score = score << 1;

    return score;
  },

  fillsBlanks: function() {
    return (this.get('blanks').toUpperCase() === 'Y');
  },

  fillsOtherBreweries: function() {
    return (this.get('otherbreweries').toUpperCase() === 'Y');
  },

  fillsOneLiters: function() {
    return (this.get('oneliters').toUpperCase() === 'Y');
  }
});
