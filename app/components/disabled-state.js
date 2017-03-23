import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  valid: computed.and('name', 'conditions'),
  notValid: computed.not('valid')
});
