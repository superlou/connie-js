import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('con', {path: '/con/:con_id'}, function() {
    this.route('events', {path: '/events'}, function() {
      this.route('new', {path: '/new'});
      this.route('show', {path: '/:event_id'});
    });

    this.route('people');

    this.route('places');
  });

  this.route('map', {path: 'map/:map_id'});
});

export default Router;
