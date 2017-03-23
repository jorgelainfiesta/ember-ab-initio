import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Component.extend({
  ajax: service(),
  isLoading: false,

  actions: {
    loadArticle(url) {
      this.set('isLoading', true);
      this.get('ajax').request(url)
      .finally(() => {
        this.set('isLoading', false);
      })
    }
  }
});
