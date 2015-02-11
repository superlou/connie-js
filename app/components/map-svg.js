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

  setupSvgPanZoom: function() {
    this.set('svgPanZoom', svgPanZoom(this.$()[0]));
  }.on('didInsertElement'),

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

  click: function(event) {
    var x = event.offsetX;
    var y = event.offsetY;

    var transform = this.getTransform();
    var point = this.inverseTransform([x, y], transform);

    x = point[0];
    y = point[1];

    if (this.get('editingState') === 'addingArea') {
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
