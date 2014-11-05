'use strict';

describe('Color', function () {
  var Color, component;

  beforeEach(function () {
    Color = require('../../../src/scripts/components/Color.jsx');
    component = Color();
  });

  it('should create a new instance of Color', function () {
    expect(component).toBeDefined();
  });
});
