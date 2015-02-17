import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('map', params.mapId);
  },

  actions: {
    createMapArea: function(points) {
      this.store.createRecord('mapArea', {
        name: "New Area",
        points: points,
        map: this.modelFor(this.routeName)
      })
    }
  }
});
