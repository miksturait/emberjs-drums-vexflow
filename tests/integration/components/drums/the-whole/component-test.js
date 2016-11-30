import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('drums/the-whole', 'Integration | Component | drums/the whole', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{drums/the-whole}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#drums/the-whole}}
      template block text
    {{/drums/the-whole}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
