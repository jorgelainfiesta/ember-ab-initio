import Ember from 'ember';

export function equals([a, b]) {
  return a === b;
}

export default Ember.Helper.helper(equals);
