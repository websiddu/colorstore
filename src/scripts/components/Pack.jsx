/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Color = require('../../scripts/components/Color');

var Pack = React.createClass({
  render: function () {
    return (
        <div className="pack">
          <h3 className='pack-heading'> Blaze </h3>
          <div className="row">
            <Color></Color>
            <Color></Color>
            <Color></Color>
            <Color></Color>
            <Color></Color>
            <Color></Color>
            <Color></Color>
            <Color></Color>
          </div>
        </div>
      );
  }
});

module.exports = Pack;
