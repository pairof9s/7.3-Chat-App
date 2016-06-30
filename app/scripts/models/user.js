var Backbone = require('backbone');


var User = Backbone.Model.extend({
  defaults: {
    'name': ''
  }
});

var UserCollection = Backbone.Collection.extend({
  model: User
});


module.exports = {
  'User': User,
  'UserCollection': UserCollection
}
