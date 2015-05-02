import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('schedule', params.schedule_id);
  },

  actions: {
    moveReservation: function(reservation, reservable, schedule) {
      reservation.set('event.start', schedule[0]);
      reservation.set('event.finish', schedule[1]);
      reservation.set('event.needsSave', true);
      reservation.set('reservable', reservable);
      reservation.set('needsSave', true);
    },

    save: function() {
      this.currentModel.get('events').forEach((event) => {
        if (event.get('needsSave') || event.get('reservable.needsSave')) {

          event.get('reservations').forEach((reservation) => {
            if (reservation.get('needsSave')) {
              reservation.save().then((r) => { r.set('needsSave', false)});
            }
          });

          event.save().then((e) => { e.set('needsSave', false)});;
        }
      })
    }
  }
});
