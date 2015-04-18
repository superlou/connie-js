import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('con');
  },

  actions: {
    selectCon: function(con_id) {
      this.transitionTo('con', con_id);  
    }
  }
});
