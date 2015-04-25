import Ember from 'ember';

export default Ember.Component.extend({
  isMoving: false,
  moveChild: null,

  rootPlaces: function() {
    return this.get('places').filter((place) => {
      return place.get('parent') == null;
    });
  }.property('places', 'places.@each.parent'),

  actions: {
    move: function(place) {
      if (this.get('isMoving')) {
        this.sendAction('reparent', this.get('moveChild'), place);
        this.set('moveChild', null);
      } else {
        this.set('moveChild', place);
      }

      this.toggleProperty('isMoving');
    }
  }
});
