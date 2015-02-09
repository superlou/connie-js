import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['map-tool'],
  roomPoints: [],

  actions: {
    addRoom: function() {
      this.set('editingState', 'addingRoom');
    },

    clickSvg: function(evt) {
      console.log(evt);
    }
  },

  mouseUp: function(event) {
    if (this.get('editingState') === 'addingRoom') {
      var x = event.offsetX;
      var y = event.offsetY;

      if (this.closesRoom(x, y)) {
        this.finalizeRoom();
      } else {
        this.get('roomPoints').pushObject([x, y]);
      }
    }
  },

  onScroll: function(event) {
    console.log(event);
  },

  closesRoom: function(x, y) {
    if (this.get('roomPoints').length > 0) {
      var x0 = this.get('roomPoints')[0][0];
      var y0 = this.get('roomPoints')[0][1];

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
    var newRoomPoints = this.get('roomPoints');

    if (newRoomPoints.length >= 3) {
      var svgPoints = newRoomPoints.join(' ');

      this.get('model.rooms').pushObject({
        name: 'New Room',
        points: svgPoints
      });
    }

    this.set('roomPoints', []);
    this.set('editingState', null);
  }
});
