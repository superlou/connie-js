import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('convention');
  },

  actions: {
    selectConvention: function(convention_id) {
      this.transitionTo('convention', convention_id);
    }
  }
});
