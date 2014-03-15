var BreweryRowComponent = React.createClass({
  render: function() {
    // return React.DOM.div(null,
    //     React.DOM.h1({className: 'brewery-name'}, this.props.brewery.get('brewery')),
    //     React.DOM.p({className: 'brewery-score'}, this.props.brewery.fillability())
    //   );
    return React.DOM.tr(null,
      React.DOM.td({className: 'brewery-name'}, this.props.brewery.get('brewery')),
      React.DOM.td({className: 'brewery-score'}, this.props.brewery.fillability())
    );
  }
});

var BreweryView = Backbone.View.extend({
  el: 'div',

  render: function() {
    React.renderComponent(
      new BreweryRowComponent({brewery: this.model}),
      document.querySelector('#breweryListing tbody')
    )
    return this;
  }
});
