const assert = require('assert');
require('testdom')('<html><body></body></html>');
var ReactTestUtils    = require('react-addons-test-utils');
var Progressbar = require('../src/progressbar.js');
var React = require('react');

describe('Progressbar', function() {
  describe('render', function () {
    it('should render precentage text', function () {
      var component = ReactTestUtils.renderIntoDocument(
        <Progressbar completed={25} id="Progress1" ref="Progress1"/>
      );
      var p = ReactTestUtils.findRenderedDOMComponentWithClass(
        component, 'progressbar-text'
      );

      assert.equal(p.textContent,"25%");
    });
  });
});
