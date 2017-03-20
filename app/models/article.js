import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  featuredImage: attr('string'),
  title: attr('string'),
  abstract: attr('string'),
  body: attr('string'),
  author: belongsTo()
});
