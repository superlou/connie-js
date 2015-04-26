import DS from 'ember-data';

export default DS.Model.extend({
  reservableType: function() {
    return this.constructor.typeKey
  }.property()
});
