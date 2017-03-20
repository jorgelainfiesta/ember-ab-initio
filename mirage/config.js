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
}
