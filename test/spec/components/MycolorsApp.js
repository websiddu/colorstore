'use strict';

describe('Main', function () {
  var MycolorsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MycolorsApp = require('../../../src/scripts/components/MycolorsApp.jsx');
    component = MycolorsApp();
  });

  it('should create a new instance of MycolorsApp', function () {
    expect(component).toBeDefined();
  });
});
