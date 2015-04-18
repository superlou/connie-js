import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var con = this.modelFor('con');
    return this.store.find('event', {con_id: con.id});
  }
});
