import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  classNames: ['reservation-block'],

  style: function() {
    return "width:" + this.get('width') + "px;left:" + this.get('left') + "px";
  }.property('width', 'left'),

  width: function() {
    var start = this.get('reservation.event.start');
    var finish = this.get('reservation.event.finish');
    var lengthInHours = (finish - start) / (1e3 * 3600);
    return lengthInHours * this.get('hourWidth');
  }.property('reservation.event.start', 'reservation.event.finish', 'hourWidth'),

  left: function() {
    var start = this.get('reservation.event.start');
    var offset = start - this.get('trackStart');
    return offset / (1e3 * 3600) * this.get('hourWidth');
  }.property('reservation.event.start', 'trackStart', 'hourWidth'),
});
