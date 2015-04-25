import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  parent: DS.belongsTo('place', {inverse: 'children'}),
  children: DS.hasMany('place', {inverse: 'parent'})
});
