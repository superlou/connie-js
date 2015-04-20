import Ember from 'ember';

export default Ember.Component.extend({
  parsed: function() {
    return Date.create(this.get('human'));
  }.property('human'),

  updateValue: function() {
    if (this.get('parsed') && this.get('parsed') != 'Invalid Date') {
      this.set('value', this.get('parsed'));
    } else {
      this.set('value', null);
    }
  }.observes('parsed'),

  showParsed: function() {
    return this.get('initialValue') != this.get('human');
  }.property('initialValue', 'human'),

  setInitialValue: function() {
    this.set('human', this.get('value'));
    this.set('initialValue', this.get('value'));
  }.on('init'),

  actions: {
    apply: function() {
      var parsed = this.get('parsed');
      this.set('human', parsed);
      this.set('initialValue', parsed);
    }
  }
});
