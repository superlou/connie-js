import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    move: function(place) {
      this.sendAction('move', place);
    }
  }
});
