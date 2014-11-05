/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Color.css');

var Color = React.createClass({
  render: function () {
    return (
        <div>
          <p>Content for Color</p>
        </div>
      );
  }
});

module.exports = Color;
