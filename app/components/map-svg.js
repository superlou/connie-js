import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  tempPoints: [],
  tempLine: '',
  selectedMapArea: null,
  transform: '',
  dotRadius: 3,
  dotRadiusScaled: 3,
  tempThing: "100,100 300,100",

  actions: {
    selectMapArea: function(mapArea) {
      this.set('selectedMapArea', mapArea);
    }
  },

  setupSvgPanZoom: function() {
    this.set('svgPanZoom', svgPanZoom(this.$()[0], {
      onZoom: (scale)=>{  // necessary to keep context
        this.onZoom(scale);
      }
    }));
  }.on('didInsertElement'),

  onZoom: function(newScale) {
    this.set('dotRadiusScaled', this.get('dotRadius') / newScale);
  },

  getTransform: function() {
    var attr = $(this.$('.svg-pan-zoom_viewport')).first().attr('transform');
    attr = attr.replace("matrix(", "");
    attr = attr.replace(")", "");

    var items = attr.split(',').map(function(item) { return parseFloat(item) });
    return items;
  },

  inverseTransform: function(point, matrix) {
    var a = matrix[0];
    var b = matrix[1];
    var c = matrix[2];
    var d = matrix[3];
    var e = matrix[4];
    var f = matrix[5];

    var x = (point[0] - e) / a;
    var y = (point[1] - f) / d;

    return [x, y];
  },

  mouseDown: function(event) {
    this.set('mouseDownLocation', [event.screenX, event.screenY]);
  },

  dragDistance: function(x, y) {
    var start = this.get('mouseDownLocation');
    if (start) {
      return Math.abs((start[0] - x)) + Math.abs((start[1] - y));
    } else {
      return 0;
    }
  },

  click: function(event) {
    var x = event.offsetX;
    var y = event.offsetY;

    // Abort click event if we meant to drag
    if (this.dragDistance(event.screenX, event.screenY) > 5) {
      return;
    }

    // Transform coordinates after pan/zoom
    var transform = this.getTransform();
    var point = this.inverseTransform([x, y], transform);

    x = point[0];
    y = point[1];

    if (this.get('editingState') === 'addingArea') {
      if (this.closesArea(x, y)) {
        this.finalizeArea();
      } else {
        this.get('tempPoints').pushObject([x, y]);
        this.set('tempLine', this.get('tempLine') + " " + x + "," + y);
      }
    }

    this.deselectAll();
  },

  deselectAll: function() {
    this.set('selectedMapArea', null);
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
      this.sendAction('createMapArea', svgPoints);
    }

    this.set('tempPoints', []);
    this.set('tempLine', '');
    this.set('editingState', null);
  }
});
