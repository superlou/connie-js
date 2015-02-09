import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['map-tool'],

  actions: {
    addRoom: function() {
      this.set('editingState', 'addingRoom');
    }
  }
});
