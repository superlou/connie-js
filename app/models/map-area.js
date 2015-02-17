import DS from 'ember-data';

export default DS.Model.extend({
    map: DS.belongsTo('map'),
    name: DS.attr('string'),
    points: DS.attr('string')
});
