import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(model) {
    this.controllerFor('con').set('activeCon', model.id);
  }
});
