/** @jsx React.DOM */

jest.dontMock('../components/Home.jsx');
jest.dontMock('../components/ToDo.jsx');
jest.dontMock('../components/Item.jsx');

jest.dontMock('../stores/AppStore');
jest.dontMock('../actions/AppActions');
jest.dontMock('../dispatchers/AppDispatcher');
jest.dontMock('../constants/AppConstants');
jest.dontMock('react/lib/merge');


describe('Main App Items', function() {

  var React = require('react/addons');
  var App = require('../components/Home.jsx');
  // var AppStore = require('../stores/AppStore');
  // var AppActions = require('../actions/AppActions');

  var TestUtils = React.addons.TestUtils;

  it('has React as first Todo item', function() {

    var testApp = TestUtils.renderIntoDocument(<App/>);
    var items = TestUtils.scryRenderedDOMComponentsWithClass(testApp, "list-group-item");

    expect(items[0].getDOMNode().textContent).toEqual('Reactx');
  });

  it('can add new item', function() {

    var testApp = TestUtils.renderIntoDocument(<App/>);
    var input = TestUtils.findRenderedDOMComponentWithClass(testApp, "form-control");
    var button = TestUtils.findRenderedDOMComponentWithClass(testApp, "btn");

    input.getDOMNode().value = "Test";
    TestUtils.Simulate.click(button.getDOMNode());
    expect(input.getDOMNode().value).toEqual('');
    // AppActions.addItemAction("Test");
    // console.log(AppStore.getData());

    //var items = TestUtils.scryRenderedDOMComponentsWithClass(testApp, "list-group-item");
    //console.log(items[items.length-1].getDOMNode().textContent);
  });
});