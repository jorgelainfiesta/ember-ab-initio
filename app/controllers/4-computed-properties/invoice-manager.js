import Ember from 'ember';
const { set } = Ember;

export default Ember.Controller.extend({
  userInvoices: [
    {
      client: 'Francis',
      value: 35000,
      status: 'draft',
      date: '2017-03-03',
    }, {
      client: 'Paul',
      value: 43050,
      status: 'pending',
      date: '2017-01-5',
    }, {
      client: 'John',
      value: 28078,
      status: 'draft',
      date: '2017-01-15',
    }, {
      client: 'Anne',
      value: 31549,
      status: 'pending',
      date: '2017-02-15',
    }, {
      client: 'Lucida',
      value: 12799,
      status: 'completed',
      date: '2017-02-01',
    }, {
      client: 'Agatha',
      value: 56029,
      status: 'completed',
      date: '2017-02-28'
    }
  ],

  currencyExchangesFromRs: {
    'USD': 66.67,
    'GTQ': 8.88,
    'INR': 1
  },

  actions: {
    changeItemAmount(item, qty) {
      set(item, 'amount', qty);
    }
  }
});
