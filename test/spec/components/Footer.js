'use strict';

describe('Footer', function () {
  var Footer, component;

  beforeEach(function () {
    Footer = require('../../../src/scripts/components/Footer.jsx');
    component = Footer();
  });

  it('should create a new instance of Footer', function () {
    expect(component).toBeDefined();
  });
});
