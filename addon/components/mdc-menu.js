import Component from '@ember/component';
import { get, set } from '@ember/object';
import layout from '../templates/components/mdc-menu';

export default Component.extend({
  layout,
  tabindex: '-1',
  isOpened: false,
  isOpenedFromTopLeft: false,
  isOpenedFromTopRight: false,
  isOpenedFromBottomLeft: false,
  isOpenedFromBottomRight: false,

  _mdcComponent: null,

  classNames: ['mdc-simple-menu'],
  classNameBindings: [
    'isOpenedFromTopLeft:mdc-simple-menu--open-from-top-left',
    'isOpenedFromTopRight:mdc-simple-menu--open-from-top-right',
    'isOpenedFromBottomLeft:mdc-simple-menu--open-from-bottom-left',
    'isOpenedFromBottomRight:mdc-simple-menu--open-from-bottom-right'
  ],
  attributeBindings: ['tabindex'],

  didInsertElement() {
    this._super(...arguments);
    let menu = new mdc.menu.MDCSimpleMenu(get(this, 'element'));
    menu.open = !!get(this, 'isOpened');
    set(this, '_mdcComponent', menu);

    menu.listen('MDCSimpleMenu:cancel', get(this, 'cancel'));
    menu.listen('MDCSimpleMenu:selected', get(this, 'select'));
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let menu = get(this, '_mdcComponent');
    menu.open = !!get(this, 'isOpened');
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, '_mdcComponent').destroy();
  },

  cancel() {},
  select() {}
});
