import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleRed() {
      this.toggleProperty('red');
    }
  }
});
