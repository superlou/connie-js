import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select: function(event) {
      this.sendAction('select', event);
    }
  }
});
