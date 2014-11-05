/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Color = require('../../scripts/components/Color');

var Pack = React.createClass({
  render: function () {
    var thisPack = this.props.pack;
    var packColors = thisPack.colors.map(function(color, i) {
      return <Color color={color}></Color>
    })
    return (
        <div className="pack">
          <h3 className='pack-heading'> {thisPack.packName} </h3>
          <div className="row">
            {packColors}
          </div>
        </div>
      );
  }
});

module.exports = Pack;
