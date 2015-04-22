import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('event', params.event_id);
  },

  actions: {
    delete: function() {
      var model = this.currentModel;

      model.deleteRecord();
      model.save().then(() => {
        this.transitionTo('con.events');
      });
    },

    save: function() {
      this.currentModel.save();
    }
  }
});
