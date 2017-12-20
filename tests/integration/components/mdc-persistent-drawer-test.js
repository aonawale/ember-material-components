import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdc-persistent-drawer', 'Integration | Component | mdc persistent drawer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdc-persistent-drawer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdc-persistent-drawer}}
      template block text
    {{/mdc-persistent-drawer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
