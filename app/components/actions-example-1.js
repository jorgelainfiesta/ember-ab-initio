import Ember from 'ember';

export default Ember.Component.extend({
  showMessage: false,
  actions: {
    toggleShow() {
      this.toggleProperty('showMessage');
    }
  }
});
