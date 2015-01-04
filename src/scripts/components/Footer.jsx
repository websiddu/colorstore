/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Footer = React.createClass({
  render: function () {
    return (
      <footer>
        <div className="container-fluid">

          <div className="pull-left">
            <ul className="list-unstyled list-inline footer-list">
              <li> <a href="/">Home</a></li>
              <li> <a href="/">About</a></li>
              <li> <a href="/">Github</a></li>
              <li> <a href="/">Contact</a></li>
            </ul>
          </div>

          <div className="pull-right">
            <ul className="list-unstyled list-inline social-list">
              <li> <a href="/"> <em className="glyphicon glyphicon-facebook"></em></a></li>
              <li> <a href="/"> <em className="glyphicon glyphicon-twitter"></em></a></li>
              <li> <a href="/"> <em className="glyphicon glyphicon-google"></em></a></li>
            </ul>
            <br />
            <small> &copy; 2015 ColorStore. All right reserved. </small>
          </div>

        </div>
      </footer>
    );
  }
});

module.exports = Footer;
