import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['invoice-manager'],

  statuses: [
    'draft',
    'pending',
    'completed',
    'all'
  ],
  currentStatus: 'all'
});
