import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var con = this.modelFor('convention');
    return this.store.find('place', {convention_id: con.id});
  },

  actions: {
    reparentTo: function(parent) {
      console.log('here');
      this.controllerFor('convention.places').set('moveChild.parent', parent);
      this.controllerFor('convention.places').set('isMoving', false);
      this.controllerFor('convention.places').set('moveChild', null);
    },

    move: function(child) {
      this.controllerFor('convention.places').set('isMoving', true)
      this.controllerFor('convention.places').set('moveChild', child);
    }
  }
});
