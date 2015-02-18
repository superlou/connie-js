import DS from 'ember-data';

export default DS.Model.extend({
  mapAreas: DS.hasMany('mapArea'),
  name: DS.attr('string')
});
