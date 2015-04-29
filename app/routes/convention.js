import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('convention', params.con_id);
  },

  afterModel: function(model) {
    this.controllerFor('convention').set('activeConvention', model.id);
  }
});
