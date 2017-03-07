import Ember from 'ember';

export default Ember.Controller.extend({
  userItems: [
    {
      name: 'Apple',
      price: 50,
      amount: 3
    }, {
      name: 'Strawberry',
      price: 20,
      amount: 15
    }, {
      name: 'Cake slice',
      price: 120,
      amount: 1
    }, {
      name: 'Carrot',
      price: 60,
      amount: 2
    }, {
      name: 'Croissant',
      price: 150,
      amount: 1
    }
  ],

  actions: {
    changeItemAmount(item, qty) {
      Ember.set(item, 'amount', qty);
    }
  }
});
