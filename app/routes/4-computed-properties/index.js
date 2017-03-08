import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('4-computed-properties.shopping-cart');
  }
});
