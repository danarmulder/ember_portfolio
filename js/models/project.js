App.Project = DS.Model.extend({
  name: DS.attr( 'string' ),
  image: DS.attr('string'),
  description: DS.attr('string')
});

App.Project.FIXTURES = [{
  id: 1,
  name: "Puppy Love",
  image: "images/unipug.jpg",
  description: "This is a project I made.  Please click on this link to check it out!"
}, {
  id: 2,
  name: "Gcamp",
  image: "images/gcamp.jpeg",
  description: "This is a project I made.  Please click on this link to check it out!"
}, {
  id: 3,
  name: "3D Gem Game",
  image: "images/rubygem.png",
  description: "This is a project I made.  Please click on this link to check it out!"
}];
