import Component from '@ember/component';
import { get, set } from '@ember/object';
import layout from '../templates/components/mdc-permanent-drawer';

export default Component.extend({
  layout,
  show: true,
  tagName: 'nav',
  classNames: ['mdc-permanent-drawer', 'mdc-typography'],

  _mdcComponent: null,

  didInsertElement() {
    this._super(...arguments);
    // let drawer = new mdc.drawer.MDCPersistentDrawer(get(this, 'element'));
    // set(this, '_mdcComponent', drawer);
  },

  willDestroyElement() {
    this._super(...arguments);
    // get(this, '_mdcComponent').destroy();
  }
});
