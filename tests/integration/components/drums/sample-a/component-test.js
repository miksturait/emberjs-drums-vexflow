import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('drums/sample-a', 'Integration | Component | drums/sample a', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{drums/sample-a}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#drums/sample-a}}
      template block text
    {{/drums/sample-a}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
