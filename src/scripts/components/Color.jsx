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
  enableEditMode: function(e) {
    this.state.color.edit_state = true;
    this.setState({
      color: this.state.color
    });
  },

  removeColor: function(e) {
    this.props.onRemoveColor(this.props.color.key);
  },

  pushToServer: function(e) {
    e.preventDefault();
    var newColor = this.refs.color.getDOMNode().value;
    //this.state.color.hex = newColor;
    //var updatedColor = this.state.color;
    var fb = new Firebase('https://colostore.firebaseio.com/packs/')
      .child(this.props.packKey)
      .child('colors')
      .child(this.props.color.key);

    fb.update({hex: newColor, edit_state: false});

    this.state.color.hex = newColor;
    this.state.color.edit_state = false
    var updatedColor = this.state.color;
    this.setState({
      color: updatedColor
    })

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
            <div className="color-actions">
              <em className="glyphicon glyphicon-pencil color-edit" onClick={this.enableEditMode}></em>
              <em className="glyphicon glyphicon-trash color-remove" onClick={this.removeColor}></em>
            </div>
            <form refs="colorFrom" onSubmit={this.pushToServer}>
              <input ref="color" type="text" autoFocus={!this.state.formDisplayed} placeholder="#efefea" onChange={this.updateColor}  />
              <input type="submit" className="hidden" />
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Color;
