/** @jsx React.DOM */

var CSApp = require('./CSApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={CSApp}>
    </Route>
  </Routes>
), document.getElementById('content'));
