import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select(option) {
      if (this.get('selected') === option) {
        this.set('selected', null);
      } else {
        this.set('selected', option);
      }
    }
  }
});
