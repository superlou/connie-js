import Ember from 'ember';

export default Ember.Controller.extend({
  visibility: function() {
    if (this.get('model.isDirty')) {
      return 'show';
    } else {
      return 'hide';
    };
  }.property('model.isDirty')
});
