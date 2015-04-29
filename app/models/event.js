import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  start: DS.attr('date'),
  finish: DS.attr('date'),
  convention: DS.belongsTo('convention'),
  reservations: DS.hasMany('reservations')
});
