document.addEventListener('DOMContentLoaded', function() {
  var URL = '0AnNkPDPOGoPFdDBvS2tOOWw1QVQ4OVhJQWxjYkNnTkE';
  Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } );
});


// TODO: Turn into models so hash and convenience functions are available
var fillabilityHash = function(entry) {
    var hash = 0;

    hash += (entry.blanks.toUpperCase() === 'Y' ? -1 : 1);
    hash += (entry.otherbreweries.toUpperCase() === 'Y' ? -1 : 1);
    hash += (entry.oneliters.toUpperCase() === 'Y' ? -1 : 1);

    return hash;
};


var sortByGrowlerFillability = function(data) {
  return data.sort(function(a, b) {
    var fillComparison = fillabilityHash(a) - fillabilityHash(b);
    return (fillComparison === 0 ? fillComparison : a.brewery.localeCompare(b.brewery));
  });
};


function showInfo(data) {
  var directives = {
    brewery: {
      html: function() {
        return (this.url)
          ? '<a href="' + this.url + '">' + this.brewery + '</a>'
          : this.brewery;
      }
    }
  }

  var fillabilitySortedData = sortByGrowlerFillability(data);
  $('.breweries').render(fillabilitySortedData, directives);
}
