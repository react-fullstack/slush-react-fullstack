/** @jsx React.DOM */

jest.dontMock('../components/Home.jsx');
jest.dontMock('../components/ToDo.jsx');
jest.dontMock('../components/Item.jsx');
jest.dontMock('../stores/AppStore.js');

describe('Main App', function() {
  it('has render method', function() {

    var React = require('react/addons');
    var App = require('../components/Home.jsx');
    var TestUtils = React.addons.TestUtils;

    var testApp = TestUtils.renderIntoDocument(<App/>);

    expect(TestUtils.isCompositeComponent(testApp)).toEqual(true);
    expect(testApp.render).toBeDefined();

    // var items = TestUtils.scryRenderedDOMComponentsWithClass(testApp, "list-group-item");

    // for (var i = 0; i < items.length; i++) {
    //     console.log(items[i].getDOMNode().textContent);
    // }
  });
});