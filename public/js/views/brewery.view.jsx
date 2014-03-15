/** @jsx React.DOM */
var BreweryLinkName = React.createClass({
  render: function() {
    var fillUrl = this.props.brewery.get('fillurl');
    var breweryName = this.props.brewery.get('brewery');
    return (fillUrl
      ? <a href={fillUrl}>{breweryName}</a>
      : <span>{breweryName}</span>
      );
  }
});

var BreweryRowComponent = React.createClass({
  render: function() {
    var fillability = this.props.brewery.fillability();
    var cx = React.addons.classSet;
    var scoreClasses = cx({
      'brewery-score': true,
      'fillability-low': fillability == 1,
      'fillability-medium': fillability == 2,
      'fillability-high': fillability == 4,
      'fillability-best': fillability == 8
    });
    return <tr>
      <td className={scoreClasses}>&nbsp;</td>
      <td className="brewery-name"><BreweryLinkName brewery={this.props.brewery} /></td>
      <td className="brewery-blanks">{this.props.brewery.get('blanks')}</td>
      <td className="brewery-otherbreweries">{this.props.brewery.get('otherbreweries')}</td>
      <td className="brewery-oneliters">{this.props.brewery.get('oneliters')}</td>
      <td className="brewery-comments">{this.props.brewery.get('comments')}</td>
      <td className="brewery-lastupdated">{this.props.brewery.get('lastupdated')}</td>
    </tr>;
  }
});

var BreweryHeading = React.createClass({
  render: function() {
    return  <tr>
              <th></th>
              <th>Brewery</th>
              <th>Fills Blanks?</th>
              <th>Branded from any brewery?</th>
              <th>Fills one-llters?</th>
              <th>Comments</th>
              <th>Last Updated</th>
            </tr>;
  }
})

var BreweryList = React.createClass({
  render: function() {
    var breweries = this.props.breweries.map(function (brewery) {

      return <BreweryRowComponent brewery={brewery} />;
    });

    return <table className="table brewery-table">
              <thead>
                <BreweryHeading />
              </thead>
              <tbody>{breweries}</tbody>
            </table>;
  }
});
