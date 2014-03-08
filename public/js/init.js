document.addEventListener('DOMContentLoaded', function() {
  var URL = '0AnNkPDPOGoPFdDBvS2tOOWw1QVQ4OVhJQWxjYkNnTkE';
  Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } );
});

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
  $('.breweries').render(data, directives);
}
