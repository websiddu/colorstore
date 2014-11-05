/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Header.css');

var Header = React.createClass({
  render: function () {
    return (
        <header>
          <a href="/"><img src="images/logo.svg"></a>
        </header>
      );
  }
});

module.exports = Header;
