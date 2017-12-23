import Component from '@ember/component';
import { get, set } from '@ember/object';
import layout from '../templates/components/mdc-persistent-drawer';

export default Component.extend({
  layout,
  isOpened: true,
  hasSpacer: true,
  tagName: 'aside',
  classNames: ['mdc-persistent-drawer', 'mdc-typography'],

  _mdcComponent: null,

  didInsertElement() {
    this._super(...arguments);
    let drawer = new mdc.drawer.MDCPersistentDrawer(get(this, 'element'));
    set(this, '_mdcComponent', drawer);

    this._updateElement();

    drawer.listen('MDCPersistentDrawer:open', get(this, 'open'));
    drawer.listen('MDCPersistentDrawer:close', get(this, 'close'));
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this._updateElement();
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, '_mdcComponent').destroy();
  },

  _updateElement() {
    let drawer = get(this, '_mdcComponent');
    drawer.open = !!get(this, 'isOpened');
  },

  open() {},
  close() {}
});
