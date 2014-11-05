/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Color = React.createClass({
  render: function () {
    return (
        <div className="col-md-2 col-lg-2 col-sm-4 col-xs-6">
          <div className="color">
            <div className="color-stip"></div>
            <div className="color-code">{"#efefef"}</div>
          </div>
        </div>
      );
  }
});

module.exports = Color;
