import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var con = this.modelFor('con');
    return this.store.find('place', {con_id: con.id});
  },

  actions: {
    reparent: function(child, parent) {
      child.set('parent', parent);
    }
  }
});
