import Ember from 'ember';

export default Ember.Component.extend({
  isMoving: false,
  moveChild: null,
  tagName: "ul",
  classNames: ['places-tree'],

  rootPlaces: function() {
    return this.get('places').filter((place) => {
      return place.get('parent') == null;
    });
  }.property('places', 'places.@each.parent'),

  actions: {
    reparentTo: function(place) {
      this.sendAction('reparentTo', place)
    }
  }
});
