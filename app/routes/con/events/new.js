import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('name', "");
    controller.set('description', "");
  },

  actions: {
    create: function() {
      var controller = this.controllerFor('con.events.new');
      var conController = this.controllerFor('con');

      var record = this.store.createRecord('event', {
        name: controller.get('name'),
        con: conController.get('model')
      });

      record.save().then((model) => {
        this.transitionTo('con.events.event', model);
      });
    }
  }
});
