import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['map-tool'],
  selectedArea: null,

  actions: {
    addArea: function() {
      this.set('editingState', 'addingArea');
    }
  }
});
