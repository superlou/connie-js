import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('con', {path: '/con/:con_id'}, function() {
    this.route('events', {path: '/events'}, function() {
      this.route('new', {path: '/new'});
      this.route('event', {path: '/:event_id'});
      this.route('edit', {path: '/:event_id/edit'});
    });

    this.route('people');
    this.route('person', {path: 'person/:event_id'});

    this.route('places');
    this.route('place', {path: 'place/:event_id'});
  });

  this.route('map', {path: 'map/:map_id'});

  this.route('ember', function() {
    this.route('events', function() {});
  });
});

export default Router;
