/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Firebase = require('firebase');

var Color = React.createClass({
  getInitialState: function() {
    return {
      color: this.props.color,
      packKey: this.props.packKey
    }
  },
  updateColor: function() {
    var newColor = this.refs.color.getDOMNode().value;

    this.state.color.hex = newColor;
    var updatedColor = this.state.color;
    this.setState({
      color: updatedColor
    })

  },
  handleSubmit: function(e) {
    e.preventDefault();
    //this.pushToServer()
  },
  pushToServer: function(e) {
    e.preventDefault();
    var newColor = this.refs.color.getDOMNode().value;
    //this.state.color.hex = newColor;
    //var updatedColor = this.state.color;
    console.log(this.props.packKey)
    console.log(this.props.color.key)
    var fb = new Firebase('https://colostore.firebaseio.com/packs/')
      .child(this.props.packKey)
      .child('colors')
      .child(this.props.color.key);

    fb.update({hex: newColor, edit_state: false});


    //fb.push(updatedColor);
  },
  render: function () {
    var color = this.state.color;
    var isEditable = color.edit_state;

    var classString = !isEditable ? "color-wrap" : "color-wrap edit";
    var styles = {
      backgroundColor: color.hex
    }

    return (
      <div className={classString}>
        <div className="color">
          <div className="color-stip" style={styles}></div>
          <div className="color-code">
            <span>{color.hex}</span>
            <form refs="colorFrom" onSubmit={this.pushToServer}>
              <input ref="color" type="text" autoFocus={!this.state.formDisplayed} placeholder="#efefea" onChange={this.updateColor}  />
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Color;
