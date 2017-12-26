import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import layout from '../templates/components/mdc-persistent-drawer';

export default MDCBase.extend({
  layout,
  mdcClass: mdc.drawer.MDCPersistentDrawer,
  isOpened: true,
  tagName: 'aside',
  classNames: ['mdc-persistent-drawer', 'mdc-typography'],

  bindListeners(mdcComponent) {
    mdcComponent.listen('MDCPersistentDrawer:open', get(this, 'open'));
    mdcComponent.listen('MDCPersistentDrawer:close', get(this, 'close'));
  },

  updateElement(mdcComponent) {
    mdcComponent.open = !!get(this, 'isOpened');
  },

  open() {},
  close() {}
});
