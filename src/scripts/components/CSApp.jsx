/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
//var Header = React.addons.Header;
var Header = require('../../scripts/components/Header');
var Pack = require('../../scripts/components/Pack');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require("../../styles/main.less");
//require('../../styles/normalize.css');
//require('../../styles/main.css');

var MY_PACKS = [
  {
    packName: 'Blaze',
    colors: [
      {
        hex: "#9dc432"
      },
      {
        hex: "#f6b829"
      },
      {
        hex: "#e04e3e"
      },
      {
        hex: "#bf4679"
      }
    ]
  }
];

var packs = MY_PACKS.map(function(pack){
  return <Pack pack={pack}></Pack>
});

var CSApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <Header></Header>
          <div className="container-fluid content">
            {packs}
          </div>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = CSApp;
