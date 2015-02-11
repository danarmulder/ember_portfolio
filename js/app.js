App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
  this.route("portfolio");
});

App.IndexRoute = Ember.Route.extend({
  
});
