var $ = require('jquery');
var Backbone = require('backbone');
// var views = require('./views/messageview');
var users = require('./models/user');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id/': 'detail'
  },
