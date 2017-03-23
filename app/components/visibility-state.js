import Ember from 'ember';

export default Ember.Component.extend({
  isHidden: false,
  actions: {
    toggleHide() {
      this.toggleProperty('isHidden');
    }
  }
});
