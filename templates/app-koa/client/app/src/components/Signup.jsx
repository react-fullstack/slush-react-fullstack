/** @jsx React.DOM */


'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var NAV = require('./NavBar.jsx');
var BANNER = require('./Banner.jsx')


var SIGNUP  = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.getDOMNode().value.trim();
    var email = this.refs.email.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();

    var userData = {
      name: name,
      email: email,
      password: password
    };
    
    $.ajax({
      type: 'POST',
      data: JSON.stringify(userData),
      contentType: 'application/json',
      url: '/api/users/',
      success: function(item) {
        console.log('added', item);
      },
      failure: function(item) {
        console.log('failed!');
      }
    });
  },

  handleInput: function(e) {
    // make sure data is formatted correctly
    console.log("at handleInput in Signup")
  },
  
  render: function(){
    return (
      <div>
        <div className="container">
        <h1>Signup</h1>
        <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="inputPassword3" className="control-label">Name</label>
              <div className="container">
                <input type="text" className="form-control" placeholder="Name" ref="name" onKeyPress={this.handleInput}/>
              </div>
            </div>
            <div className="form-group">
              <label for="inputEmail3" className="control-label">Email</label>
              <div className="container">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" ref="email" onKeyPress={this.handleInput}/>
              </div>
            </div>
            <div className="form-group">
              <label for="inputPassword3" className="control-label">Password</label>
              <div className="container">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" ref="password" onKeyPress={this.handleInput}/>
              </div>
            </div>
           
            <div className="form-group">
              <div className="control-button">
                <button type="submit" className="btn btn-default" >Sign up</button>
              </div>
            </div>
          </form>
        </div> 
      </div>

      )
  }
})

module.exports = SIGNUP;
