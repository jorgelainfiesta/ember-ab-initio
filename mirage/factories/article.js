import { Factory, faker } from 'ember-cli-mirage';
const { image, lorem } = faker;

export default Factory.extend({
  title() { return lorem.sentence(); },
  abstract() { return lorem.paragraph(); },
  body() { return lorem.paragraphs(4); },
  featuredImage() {
    let otherTitle = lorem.words(2).dasherize();
    return `${image.abstract()}/${otherTitle}`;
  },
});
