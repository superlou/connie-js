import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var con = this.modelFor('con');
    return this.store.find('place', {con_id: con.id});
  },

  actions: {
    reparentTo: function(parent) {
      console.log('here');
      this.controllerFor('con.places').set('moveChild.parent', parent);
      this.controllerFor('con.places').set('isMoving', false);
      this.controllerFor('con.places').set('moveChild', null);
    },

    move: function(child) {
      this.controllerFor('con.places').set('isMoving', true)
      this.controllerFor('con.places').set('moveChild', child);
    }
  }
});
