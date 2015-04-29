import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['track'],

  gridWidthStyle: function() {
    var width = this.get('hourWidth') / 2;
    return ("width:" + width + "px").htmlSafe();
  }.property('hourWidth'),

  setupUi: function() {
    this.$().droppable({
      drop: function(event, ui) {
        console.log('Dropped');
      }
    });
  }.on('didInsertElement')
});
