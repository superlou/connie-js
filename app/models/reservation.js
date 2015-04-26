import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.belongsTo('event'),
  reservable: DS.belongsTo('reservable', {polymorphic: true})
});
