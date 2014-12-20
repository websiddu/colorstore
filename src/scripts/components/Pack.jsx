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
      formDisplayed: false,
      pack: this.props.pack
    }
  },

  showForm: function(e) {
    this.setState({
      formDisplayed: true,
      initialColor: '#efefea'
    })
    //showForm = !showForm;
  },
  addNewColor: function() {
    var newColor = {
      hex: "#efefea",
      edit_state: true,
      rbg: '',
      hsla: '',
      cmyk: ''
    };

    console.log(this.state.pack.key)

    //this.state.pack.colors.push(newColor);

    var fb = new Firebase('https://colostore.firebaseio.com/packs')
      .child(this.state.pack.key)
      .child('colors');
    fb.push(newColor)


    //console.log(fb.child('colors'));
    //fb.child('colors').push(newColor)


    //var updatedPack = this.state.pack;
    //this.setState({pack: updatedPack});
  },
  render: function () {
    var thisPack = this.props.pack;
    var showFormStyles = !this.state.formDisplayed ? "color-wrap add-new-color" : "color-wrap"

    var packColors = [];

    for(var key in thisPack.colors) {
      thisPack.colors[key].key = key;
      packColors.push(<Color color={thisPack.colors[key]} packKey={thisPack.key}></Color>)
    }

    return (
        <div className="pack">
          <h3 className='pack-heading'> {thisPack.packName} </h3>
          <div className="row">
            {packColors}
            <div className={showFormStyles}>
              <div className="color">
                <span onClick={this.addNewColor}>{"+"}</span>
              </div>
            </div>
          </div>
        </div>
      );
  }
});

module.exports = Pack;
