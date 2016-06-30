var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');

var Message = require('./models/message.js');
var MessageList = require('./components/index.jsx').MessageList;

var chat = new models.MessageCollection();
descriptions.add([
  {}
])


ReactDOM.render(
  React.createElement(MessageList, {collection: descriptions}),
  document.getElementById('container')
);
