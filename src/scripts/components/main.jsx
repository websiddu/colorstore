/** @jsx React.DOM */

var MycolorsApp = require('./MycolorsApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={MycolorsApp}>
    </Route>
  </Routes>
), document.getElementById('content'));
