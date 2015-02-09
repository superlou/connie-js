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
    if (this.get('editingState') === 'addingRoom') {
      var x = event.offsetX;
      var y = event.offsetY;

      if (this.closesRoom(x, y)) {
        this.finalizeRoom();
      } else {
        this.get('tempPoints').pushObject([x, y]);
      }
    }

    this.deselectAll();
  },

  deselectAll: function() {
    this.set('selectedArea', null);
  },

  closesRoom: function(x, y) {
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

  finalizeRoom: function() {
    var newRoomPoints = this.get('tempPoints');

    if (newRoomPoints.length >= 3) {
      var svgPoints = newRoomPoints.join(' ');

      this.get('model.rooms').pushObject(Ember.Object.create({
        name: 'New Room',
        points: svgPoints
      }));
    }

    this.set('tempPoints', []);
    this.set('editingState', null);
  }
});
