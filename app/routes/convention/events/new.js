import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('name', "");
    controller.set('description', "");
  },

  actions: {
    create: function() {
      var controller = this.controllerFor('convention.events.new');
      var conController = this.controllerFor('convention');

      var record = this.store.createRecord('event', {
        name: controller.get('name'),
        convention: conController.get('model')
      });

      record.save().then((model) => {
        this.transitionTo('convention.events.show', model);
      });
    }
  }
});
