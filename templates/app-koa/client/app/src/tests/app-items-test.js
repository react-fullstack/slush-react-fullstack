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
  var TestUtils = React.addons.TestUtils;

  it('can add new item', function() {

    var testApp = TestUtils.renderIntoDocument(<App/>);
    var input = TestUtils.findRenderedDOMComponentWithClass(testApp, "form-control");
    var button = TestUtils.findRenderedDOMComponentWithClass(testApp, "btn");

    input.getDOMNode().value = "Test";
    TestUtils.Simulate.click(button.getDOMNode());
    expect(input.getDOMNode().value).toEqual('');
 
  });
});