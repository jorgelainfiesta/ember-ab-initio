import Ember from 'ember';
const {
  isNone,
  inject: { service },
  $
} = Ember;

export default Ember.Controller.extend({
  method: 'GET',
  validUrl: 'http://content.criticarq.gt/wp-json/wp/v2/articles/713',
  invalidUrl: 'https://embermeetup.com/wp-json/wp/v2/episodes?page=1&per_page=1',
  ajax: service(),

  actions: {
    requestXHR(method, url) {
      // BEGIN-SNIPPET ajax-xhr-example
      let httpRequest = new XMLHttpRequest();
      if (isNone(httpRequest)) {
        return false;
      }

      let alertContents = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            alert(httpRequest.responseText);
          } else {
            alert('There was a problem with the request.');
          }
        }
      };

      httpRequest.onreadystatechange = alertContents;
      httpRequest.open(method, url);
      httpRequest.send();
      // END-SNIPPET
    },

    requestjQuery(method, url) {
      // BEGIN-SNIPPET ajax-jquery-example
      $.ajax(url, {
        method
      })
      .done(function(result) {
        alert(result);
      })
      .fail(function() {
        alert('There was a problem with the request');
      });
      // END-SNIPPET
    },

    requestPromise(method, url) {
      // BEGIN-SNIPPET ajax-promise-example
      this.get('ajax').request(url, {
        method
      })
      .then(function(result) {
        alert(result);
      })
      .catch(function() {
        alert('There was a problem with the request');
      });
      // END-SNIPPET
    }
  }
});
