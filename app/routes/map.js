import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('map', params.map_id);
  },

  actions: {
    createMapArea: function(points) {
      var area = this.store.createRecord('area', {
        name: 'New Area',
      });

      var mapArea = this.store.createRecord('mapArea', {
        points: points,
        map: this.modelFor(this.routeName),
        area: area
      });
    }
  }
});
