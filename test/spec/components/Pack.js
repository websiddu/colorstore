'use strict';

describe('Pack', function () {
  var Pack, component;

  beforeEach(function () {
    Pack = require('../../../src/scripts/components/Pack.jsx');
    component = Pack();
  });

  it('should create a new instance of Pack', function () {
    expect(component).toBeDefined();
  });
});
