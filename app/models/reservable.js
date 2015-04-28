import DS from 'ember-data';

export default DS.Model.extend({
  reservations: DS.hasMany('reservation', {polymorphic: true}),

  reservableType: function() {
    return this.constructor.typeKey
  }.property()
});
