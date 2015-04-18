import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('con', {path: 'con/:con_id'}, function() {
    this.route('events');
    this.route('event', {path: 'event/:event_id'});

    this.route('people');
    this.resource('person', {path: 'person/:event_id'});

    this.route('places');
    this.resource('place', {path: 'place/:event_id'});
  });

  this.resource('map', {path: 'map/:map_id'});
});

export default Router;
