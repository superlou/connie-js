import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var con = this.modelFor('convention');
    return this.store.find('schedule', {convention_id: con.id});
  }
});
