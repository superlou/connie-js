import DS from 'ember-data';
import Reservable from './reservable';

export default Reservable.extend({
  name: DS.attr('string'),
  parent: DS.belongsTo('place', {inverse: 'children'}),
  children: DS.hasMany('place', {inverse: 'parent'})
});
