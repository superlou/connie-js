import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var con = this.modelFor('convention');
    return this.store.find('event', {convention_id: con.id});
  }
});
