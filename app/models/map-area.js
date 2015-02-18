import DS from 'ember-data';

export default DS.Model.extend({
    map: DS.belongsTo('map'),
    area: DS.belongsTo('area'),
    points: DS.attr('string')
});
