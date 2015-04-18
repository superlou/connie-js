import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    update: function() {
      this.currentModel.save().then((model) => {
        this.transitionTo('con.events.event', model);
      });
    }
  }
});
