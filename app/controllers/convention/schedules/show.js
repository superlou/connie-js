import Ember from 'ember';

export default Ember.Controller.extend({
  showCreateReservationModal: false,

  reservations: function() {
    var events = this.get('model.events');
    var reservations = [];

    events.forEach((event) => {
      event.get('reservations').forEach((reservation) => {
        reservations.addObject(reservation);
      });
    });

    return reservations;
  }.property('model.events'),

  showSave: function() {
    return 'show';

    // todo Fix logic
    // if (this.get('changedReservations').length) {
    //   return 'show';
    // } else {
    //   return 'hide';
    // }
  }.property('changedReservations'),

  changedReservations: function() {
    return this.get('reservations').filter((reservation) => {
      return reservation.get('needsSave') || reservation.get('event.needsSave');
    });
  }.property('model.events.@each.isDirty', 'reservations.@each.isDirty')
});
