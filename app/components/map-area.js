import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'polygon',
  classNames: ['area'],
  // classNameBindings: ['isSelected'], todo Not working in 1.10.0.
  attributeBindings: ['points'],

  click: function(event) {
    this.sendAction('action', this.get('model'));
    return false;
  },

  points: function() {
    return this.get('model.points');
  }.property('model.points'),

  isSelected: function() {
    return this.get('selectedMapArea') === this.get('model');
  }.property('selectedMapArea'),

  // Hack for https://github.com/emberjs/ember.js/issues/9745
  propertyObserver: function() {
    var classnames = this.$().attr('class').replace(/ ?is-selected/, '');
    if(this.get('isSelected')) this.$().attr('class', classnames + ' is-selected');
    else this.$().attr('class', classnames);
  }.observes('isSelected'),
});
