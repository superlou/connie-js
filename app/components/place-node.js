import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    reparentTo: function(place) {
      this.sendAction('reparentTo', place);
    }
  }
});
