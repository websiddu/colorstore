/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Color = require('../../scripts/components/Color');
var ColorPicker = require('react-colorpicker');

var Pack = React.createClass({
  // var showFormStyles = "";
  // var showForm = false;
  getInitialState: function() {
    return {
      formDisplayed: false
    }
  },

  showForm: function(e) {
    console.log("This..")
    this.setState({
      formDisplayed: true,
      initialColor: '#efefea'
    })
    //showForm = !showForm;
  },
  _addNewColor: function(e) {
    console.log(this.props.pack);
  },
  render: function () {
    var thisPack = this.props.pack;
    var showFormStyles = !this.state.formDisplayed ? "color-wrap add-new-color" : "color-wrap"

    var packColors = thisPack.colors.map(function(color, i) {
      return <Color color={color}></Color>
    })
    return (
        <div className="pack">
          <h3 className='pack-heading'> {thisPack.packName} </h3>
          <div className="row">
            {packColors}
            <div className={showFormStyles} onClick={this.showForm} dispalyed={this.state.formDisplayed}>
              <div className="color">
                <span>{"+"}</span>
                <div className="color-stip"></div>
                <div className="color-code">
                  <input type="text" focus={!this.state.formDisplayed} placholder="#efefea" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
});

module.exports = Pack;
