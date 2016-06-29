var $ = require('jquery');
var Backbone = require('backbone');
// var views = require('./views/messageview');
var models = require('./models/message');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id/': 'detail'
  },
