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
          <div className="colorbar"></div>
          <div className="content">
            <a href="/" className="logo"><img src="images/logo.svg" /></a>
          </div>
        </header>
      );
  }
});

module.exports = Header;
