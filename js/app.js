App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function() {
  this.route("about");
  this.resource("projects", function(){
    this.route("project", {path: '/:project_id'});
  });
});


App.ProjectsRoute = Ember.Route.extend({
  model:function(){
    return this.store.find('project');
  }
});

App.ProjectsIndexRoute = Ember.Route.extend({
  redirect: function(projects, transition) {
      this.transitionTo('projects.project', projects.get('firstObject'));
  }
});
