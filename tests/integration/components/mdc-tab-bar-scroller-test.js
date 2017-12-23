import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdc-tab-bar-scroller', 'Integration | Component | mdc tab bar scroller', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdc-tab-bar-scroller}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdc-tab-bar-scroller}}
      template block text
    {{/mdc-tab-bar-scroller}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
