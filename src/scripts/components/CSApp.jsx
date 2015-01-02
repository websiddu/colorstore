/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Firebase = require('firebase');
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

var CSApp = React.createClass({
  loadData: function() {
    var fb = new Firebase('https://colostore.firebaseio.com/packs');
    fb.on('value', function(snap) {
      var items = [];
      snap.forEach(function(itemSanp){
        var item = itemSanp.val();
        item.key = itemSanp.name();
        items.push(item);
      });

      var packs = items.map(function(pack){
        return <Pack pack={pack}></Pack>
      });

      this.setState({
        packs: packs
      })

    }.bind(this));
  },
  componentDidMount: function () {
    this.loadData();
  },

  addNewPack: function() {
    newColor = {
        hex: "#efefea",
        edit_state: false,
        rbg: '',
        hsla: '',
        cmyk: ''
    }

    newPack = {
      packName: this.refs.packName.getDOMNode().value,
      colors: {}
    }


    this.state.packs.push(newPack)

    var updatedPacks = this.state.packs;

    this.setState({
      packs: updatedPacks
    });

    var fb = new Firebase('https://colostore.firebaseio.com/packs');
    pack = fb.push(newPack);
    pack.child('colors').push(newColor)
  },
  getInitialState: function() {
    return {
      packs: []
    }
  },
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <Header></Header>
          <div className="container-fluid content">

            <div className="row-fluid">
              <div className="col-lg-4 col-sm-6">
                <div className="new-pack-form">
                  <h4 className="form-title">Add new pack</h4>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Name your pack!" ref="packName" />
                    <span className="input-group-btn">
                    <button className="btn btn-success" type="button" onClick={this.addNewPack}>Add!</button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-sm-6">  </div>
            </div>
            <div className="row-fluid">
              <div className="col-lg-12 col-sm-12">
                {this.state.packs}
              </div>
            </div>
          </div>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = CSApp;
