import Ember from 'ember';
const { get } = Ember;

export default Ember.Component.extend({
  classNames: ['shopping-cart'],
  taxRate: 0.13,

  didReceiveAttrs() {
    this._super(...arguments);

    let items = this.get('userItems');
    let total = items
      .map((item) => {
        return get(item, 'price') * get(item, 'amount');
      })
      .reduce((total, item) => {
        return total + item;
      });

    let taxRate = this.get('taxRate');
    let taxes = total * taxRate;
    let grandTotal = total + taxes;
    this.set('total', total);
    this.set('taxes', taxes);
    this.set('grandTotal', grandTotal);
  },

  actions: {
    decreaseQty(item) {
      let newAmount = get(item, 'amount') - 1;
      if (newAmount >= 0) {
        this.sendAction('onChangeAmount', item, newAmount);
      }
    }
  }
});
