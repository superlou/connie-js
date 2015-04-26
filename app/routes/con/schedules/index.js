import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var con = this.modelFor('con');
    return this.store.find('schedule', {con_id: con.id});
  }
});
