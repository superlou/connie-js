import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  tempPoints: [],
  selectedArea: null,

  actions: {
    selectArea: function(area) {
      this.set('selectedArea', area);
    }
  },

  click: function(event) {
    if (this.get('editingState') === 'addingArea') {
      var x = event.offsetX;
      var y = event.offsetY;

      if (this.closesArea(x, y)) {
        this.finalizeArea();
      } else {
        this.get('tempPoints').pushObject([x, y]);
      }
    }

    this.deselectAll();
  },

  deselectAll: function() {
    this.set('selectedArea', null);
  },

  closesArea: function(x, y) {
    if (this.get('tempPoints').length > 0) {
      var x0 = this.get('tempPoints')[0][0];
      var y0 = this.get('tempPoints')[0][1];

      if ((Math.abs(x - x0) < 10) && (Math.abs(y - y0) < 10)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  finalizeArea: function() {
    var newAreaPoints = this.get('tempPoints');

    if (newAreaPoints.length >= 3) {
      var svgPoints = newAreaPoints.join(' ');

      this.get('model.areas').pushObject(Ember.Object.create({
        name: 'New Area',
        points: svgPoints
      }));
    }

    this.set('tempPoints', []);
    this.set('editingState', null);
  }
});
