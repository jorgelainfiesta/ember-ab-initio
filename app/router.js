import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('templates', function() {
    this.route('1-sweet-templates');
  });
  this.route('actions', function() {
    this.route('1-bind-actions');
  });
  this.route('components', function() {
    this.route('1-component-images');
  });
});

export default Router;
