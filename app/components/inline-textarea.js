import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    done: function() {
      this.set('isEditing', false);
    }
  }
});
