import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('disabled-state', 'Integration | Component | disabled state', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{disabled-state}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#disabled-state}}
      template block text
    {{/disabled-state}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
