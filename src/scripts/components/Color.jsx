/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Color = React.createClass({
  render: function () {
    var color = this.props.color;
    var styles = {
      backgroundColor: color.hex
    }
    return (
      <div className="color-wrap">
        <div className="color">
          <div className="color-stip" style={styles}></div>
          <div className="color-code">{color.hex.toUpperCase()}</div>
        </div>
      </div>
    );
  }
});

module.exports = Color;
