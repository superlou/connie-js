import Ember from 'ember';

export default Ember.Component.extend({
  unreservedEvents: function() {
    return this.get('events').filter((event) => {
      return (event.get('reservations').length == 0);
    });
  }.property('events', 'events.reservations.@each'),

  actions: {
    select: function(event) {
      this.sendAction('select', event);
    }
  }
});
