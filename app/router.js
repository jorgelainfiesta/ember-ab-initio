import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('actions', function() {
    this.route('1-bind-actions');
  });

  this.route('example-component');
  this.route('1-templates');
  this.route('2-actions');
  this.route('3-components');
  this.route('4-computed-properties', function() {
    this.route('shopping-cart');
    this.route('invoice-manager');
  });
  this.route('5-helpers');
});

export default Router;
