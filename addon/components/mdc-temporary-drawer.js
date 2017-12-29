import MDCBase from './-mdc-base';
import { get } from '@ember/object';
import layout from '../templates/components/mdc-temporary-drawer';

export default MDCBase.extend({
  layout,
  mdcClass: mdc.drawer.MDCTemporaryDrawer,
  isOpened: true,
  hasSpacer: false,
  tagName: 'aside',
  classNames: ['mdc-temporary-drawer', 'mdc-typography'],

  bindListeners(mdcComponent) {
    mdcComponent.listen('MDCTemporaryDrawer:open', get(this, 'open'));
    mdcComponent.listen('MDCTemporaryDrawer:close', get(this, 'close'));
  },

  updateElement(mdcComponent) {
    mdcComponent.open = !!get(this, 'isOpened');
  },

  open() {},
  close() {}
});
