import { Factory, faker } from 'ember-cli-mirage';
const { name, internet } = faker;


export default Factory.extend({
  firstName() { return name.firstName(); },
  lastName() { return name.lastName(); },
  email() { return internet.email(); },
  avatar() { return internet.avatar(); }
});
