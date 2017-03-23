import Ember from 'ember';

export default Ember.Controller.extend({
  options: [
    {
      name: 'Pizza Margherita',
      veg: true
    }, {
      name: 'Penne a la carbonara',
      veg: false
    }, {
      name: 'Tiramisu',
      veg: true
    }, {
      name: 'Raviolli fungi',
      veg: true
    }, {
      name: 'Tortellini alla panna',
      veg: false
    }, {
      name: 'Semifredo',
      veg: false
    }
  ],
  articleUrl: 'api/authors'
});
