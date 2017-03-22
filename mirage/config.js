import { Response } from 'ember-cli-mirage';

export default function() {
  this.namespace = 'api';

  this.get('/authors');
  this.get('/authors/:id');
  this.post('/authors');
  this.put('/authors/:id');
  this.del('/authors/:id');

  this.get('/articles');
  this.get('/articles/:id');
  this.post('/articles');
  this.put('/articles/:id');
  this.del('/articles/:id');

  this.post('/login', function(schema, request) {
    let [userParam, passParam] = request.requestBody.split('&');
    let bothParamsPresent = userParam && passParam;
    if (!bothParamsPresent) {
      return;
    }

    let validUser = userParam.length > 5;
    let validPass = passParam.length > 12;
    let validLogin = validUser && validPass;

    if (validLogin) {
      let username = userParam.split('=')[1];
      return new Response(200, { }, {
        success: true,
        username
      });
    }
    return new Response(400, { }, {errors: ['Invalid login']});
  });
}
