import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var con = this.modelFor('convention');

    return Ember.RSVP.hash({
      schedule: this.store.find('schedule', params.schedule_id),
      events: this.store.find('event', {convention_id: con.id})
    });
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
      this.currentModel.events.forEach((event) => {
        if (event.get('needsSave') || event.get('reservable.needsSave')) {

          event.get('reservations').forEach((reservation) => {
            if (reservation.get('needsSave')) {
              reservation.save().then((r) => { r.set('needsSave', false)});
            }
          });

          event.save().then((e) => { e.set('needsSave', false)});;
        }
      })
    },

    selectEvent: function(startTime, reservable) {
      this.set('newReservationStartTime', startTime);
      this.set('newReservationReservable', reservable);
      this.controllerFor(this.routeName).set('showCreateReservationModal', true);
    },

    closeCreateReservationModal: function() {
      this.controllerFor(this.routeName).set('showCreateReservationModal', false);
    },

    createReservation: function(event) {
      this.controllerFor(this.routeName).set('showCreateReservationModal', false);
      var reservation = this.store.createRecord('reservation', {
        event: event,
        reservable: this.get('newReservationReservable'),
        needsSave: true
      });

      var start = new Date(this.get('newReservationStartTime'))
      var finish = new Date(start).addMinutes(30);

      event.set('start', start);
      event.set('finish', finish);

      event.set('needsSave', true);
    }
  }
});
